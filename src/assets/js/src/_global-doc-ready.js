$(function() {

    // PayPal Donation
    PayPal.Donation.Button({
        env:'production',
        hosted_button_id:'L5UK9LU6RRNMS',
        image: {
            src:'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
            alt:'Donate with PayPal button',
            title:'PayPal - The safer, easier way to pay online!'
        }
    }).render('#donate-button');

});