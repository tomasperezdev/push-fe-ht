import { useEffect, useState } from "react";
import { SupportedDevices } from "../supportedDevices";

const useCurrentDevice = () => {
  const [currentDevice, setCurrentDevice] = useState(2);

  const handleWindowSizeChange = () => {
    let device = -1;
    switch (true) {
      case window.innerWidth <= 767:
        device = SupportedDevices.mobile;
        break;
      case window.innerWidth <= 991:
        device = SupportedDevices.tablet;
        break;
      default:
        device = SupportedDevices.desktop;
        break;
    }
    setCurrentDevice(device);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  /*  Tested creating the hook based on the userAgent, but it's not reliable, 
      some devices can be detected as mobile when they are not, and vice versa, 
      iPad Pro or Surface Pro for example.

    useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      console.log("userAgent", userAgent);
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setCurrentDevice(SupportedDevices.mobile);
      } else if (isTablet) {
        setCurrentDevice(SupportedDevices.tablet);
      } else {
        setCurrentDevice(SupportedDevices.desktop);
      }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []); */

  return currentDevice;
};
/*   */

export default useCurrentDevice;
