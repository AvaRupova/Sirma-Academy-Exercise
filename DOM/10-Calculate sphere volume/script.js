function calculateVolume() {

    const radiusElement = document.getElementById('radius').value
    
    const volume = (4 / 3) * Math.PI * Math.pow(radiusElement, 3)

   document.getElementById('volume').value = volume.toFixed(4)

}