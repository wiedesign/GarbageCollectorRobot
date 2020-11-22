import React, {Component} from 'react';

/**
 * Scan for peripherals
 * Output: Device characteristic and service 
 */
function getDeviceInfo(){
  let options = {
    acceptAllDevices: true
  }

  console.log('Requesting BLE device info...')
  navigator.bluetooth.requestDevice(options).then(device => {
    console.log('Name: ' + device.name)
  }).catch(error => {
    console.log('Request device error: ' + error)
  })
}

/**
 * Checks if Web BLE is available on given browser 
 * Output: boolean 
 */
function isWebBLEAvailable(){
  // CASE: check if browser support Web Bluetooth API 
  if(!navigator.bluetooth){
    console.log('Web Bluetooth is not available!');
    return false;
  }
  alert('Bluetooth is available');
  console.log('Web Bluetooth is available!');

  getDeviceInfo();
  return true; 
}

class BluetoothButton extends Component {
  render(){return (
      <div className="BluetoothButton">
        <button onClick={isWebBLEAvailable}> Connect to Bluetooth </button>
      </div>
    );
  }
}

export default BluetoothButton;
