import { ChevronDown, LocateFixed } from "lucide-react";
import React, { useState, useEffect } from "react";

const AddressForm = ({ setFormData, formData }) => {
  // Address data state
  const [address, setAddress] = useState({
    street: "",
    landmark: "",
    city: "",
    zipcode: "",
    country: "",
  });

  // Location button state
  const [locationStatus, setLocationStatus] = useState({
    text: "Use Current Location",
    loading: false,
    error: false,
  });

  // Update parent form data
  useEffect(() => {
    setFormData({
      street_address: address.street,
      suburb: address.landmark,
      state: address.city,
      postcode: address.zipcode,
      country: address.country,
    });
  }, [address, setFormData]);

  
  // Detect Brave browser
  // Detect Brave browser
  const isBraveBrowser = () => {
    return (
      (navigator.brave && navigator.brave.isBrave) ||
      navigator.userAgent.includes("Brave")
    );
  };

  // Get coordinates with Brave workaround
  const getCoordinates = async () => {
    return new Promise((resolve, reject) => {
      const options = {
        enableHighAccuracy: false, // Works better in Brave
        timeout: 15000,
        maximumAge: 60000,
      };

      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error),
        options
      );
    });
  };

  // Reverse geocoding to get address from coordinates
  const getAddressFromCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();

      return {
        street: data.address.road || "",
        landmark: data.address.neighbourhood || data.address.suburb || "",
        city: data.address.city || data.address.town || "",
        zipcode: data.address.postcode || "",
        country: data.address.country || "",
      };
    } catch (error) {
      console.error("Geocoding error:", error);
      throw new Error("Could not fetch address details");
    }
  };

  // Get location based on IP address (Fallback for Brave)
  const getIPLocation = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=f2b553f8f408ef"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("IP Location error:", error);
      throw new Error("Could not fetch IP-based location.");
    }
  };

  // Handle location button click
  const handleDetectLocation = async () => {
    if (locationStatus.loading) return;

    setLocationStatus({ text: "Detecting...", loading: true, error: false });

    try {
      // Brave-specific instructions
      if (isBraveBrowser()) {
        const proceed = confirm(
          "For location to work in Brave:\n\n" +
            "1. Click the lock icon in the address bar\n" +
            "2. Set Location to 'Allow'\n" +
            "3. Disable Shields for this site\n\n" +
            "Click OK to continue or Cancel to enter manually."
        );
        if (!proceed) throw new Error("User cancelled Brave prompt");

        // Extra step: Ask the user to update settings manually in Brave
        alert(
          "If location still doesn't work, please open 'Settings' in Brave and ensure that location permission is set to 'Allow' for this site."
        );
      }

      // Check permissions (permission API)
      const permissionStatus = await navigator.permissions.query({
        name: "geolocation",
      });

      // Handle denied permissions
      if (permissionStatus.state === "denied") {
        alert(
          "Location access is denied. Please enable it in browser settings."
        );
        throw new Error("Location permission denied.");
      }

      // Get coordinates
      const coords = await getCoordinates();

      // Get address from coordinates
      const newAddress = await getAddressFromCoords(
        coords.latitude,
        coords.longitude
      );

      // Update address state
      setAddress(newAddress);
      setLocationStatus({
        text: "Location Found!",
        loading: false,
        error: false,
      });
    } catch (error) {
      console.error("Location error:", error);

      // Fallback to IP-based location if geolocation fails
      try {
        const ipLocation = await getIPLocation();
        const newAddress = await getAddressFromCoords(
          parseFloat(ipLocation.loc.split(",")[0]),
          parseFloat(ipLocation.loc.split(",")[1])
        );

        setAddress(newAddress);
        setLocationStatus({
          text: "Location Found via IP!",
          loading: false,
          error: false,
        });
      } catch (ipError) {
        setLocationStatus({
          text: "Failed - Try Again",
          loading: false,
          error: true,
        });
        alert("Could not detect location. Please enter manually.");
      }

      setTimeout(() => {
        setLocationStatus({
          text: "Use Current Location",
          loading: false,
          error: false,
        });
      }, 2000);
    }
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
    console.log(formData)
  };

  return (
    <>
      <input
        type="text"
        placeholder="Street"
        value={address.street}
        onChange={(e) => handleInputChange("street", e.target.value)}
        className="outline-primary border col-span-2 border-gray rounded-lg px-3 py-2.5"
      />
      <input
        type="text"
        placeholder="Landmark"
        value={address.landmark}
        onChange={(e) => handleInputChange("landmark", e.target.value)}
        className="outline-primary border border-gray rounded-lg px-3 py-2.5"
      />
      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={(e) => handleInputChange("city", e.target.value)}
        className="outline-primary border border-gray rounded-lg px-3 py-2.5"
      />
      <input
        type="text"
        placeholder="Zipcode"
        value={address.zipcode}
        onChange={(e) => handleInputChange("zipcode", e.target.value)}
        className="outline-primary border border-gray rounded-lg px-3 py-2.5"
      />
      <div className="relative h-fit">
        <select
          value={address.country}
          onChange={(e) => handleInputChange("country", e.target.value)}
          className="outline-primary border border-gray cursor-pointer rounded-lg px-3 py-2.5 size-full appearance-none"
        >
          <option value="" disabled>
            Country
          </option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="America">America</option>
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary"
          size={25}
        />
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={handleDetectLocation}
        disabled={locationStatus.loading}
        className={`w-full py-2 cursor-pointer col-span-2 border px-4 rounded flex items-center justify-center gap-2
          ${
            locationStatus.loading
              ? "bg-amber-300/20 text-amber-500 border-amber-500"
              : locationStatus.error
              ? "bg-red-100 text-red-600 border-red-500"
              : "bg-primary/25 text-primary border-primary"
          }`}
      >
        {locationStatus.loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-amber-500"></div>
        ) : (
          <LocateFixed className="h-5 w-5" />
        )}
        {locationStatus.text}
      </div>
    </>
  );
};

export default AddressForm;
