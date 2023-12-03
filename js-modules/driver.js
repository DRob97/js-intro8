export const driverName = 'chrome';
// Store driver version in a variable called driverVersion
// Store 119.0.6045.200 there and export it
export const driverVersion = 119;

export function quitDriver(){
    console.log('Driver quit!');
}

// Most used, therefore can be made default
export default function getDriver(){
    console.log('Driver get!');
}