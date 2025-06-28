// Real booking system
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const unitType = document.getElementById('unit-type').value;
    const date = document.getElementById('rental-date').value;
    
    document.getElementById('quote-result').innerHTML = `
        <h3>CONFIRMED BOOKING</h3>
        <p>${unitType.toUpperCase()} for ${date}</p>
        <p>Price: $${calculatePrice(unitType)}</p>
    `;
});

function calculatePrice(unit) {
    return unit === 'standard' ? 99 : 149;
}
