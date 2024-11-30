// Country codes data
const countryCodes = [
    { code: '+93', country: 'Afganistán' },
    { code: '+355', country: 'Albania' },
    { code: '+49', country: 'Alemania' },
    { code: '+376', country: 'Andorra' },
    { code: '+244', country: 'Angola' },
    { code: '+1', country: 'Anguila' },
    { code: '+1', country: 'Antigua y Barbuda' },
    { code: '+966', country: 'Arabia Saudita' },
    { code: '+213', country: 'Argelia' },
    { code: '+54', country: 'Argentina' },
    { code: '+374', country: 'Armenia' },
    { code: '+297', country: 'Aruba' },
    { code: '+61', country: 'Australia' },
    { code: '+43', country: 'Austria' },
    { code: '+994', country: 'Azerbaiyán' },
    { code: '+1', country: 'Bahamas' },
    { code: '+973', country: 'Bahréin' },
    { code: '+880', country: 'Bangladés' },
    { code: '+1', country: 'Barbados' },
    { code: '+32', country: 'Bélgica' },
    { code: '+501', country: 'Belice' },
    { code: '+229', country: 'Benín' },
    { code: '+1', country: 'Bermudas' },
    { code: '+375', country: 'Bielorrusia' },
    { code: '+95', country: 'Birmania' },
    { code: '+591', country: 'Bolivia' },
    { code: '+387', country: 'Bosnia y Herzegovina' },
    { code: '+267', country: 'Botsuana' },
    { code: '+55', country: 'Brasil' },
    { code: '+673', country: 'Brunéi' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+226', country: 'Burkina Faso' },
    { code: '+257', country: 'Burundi' },
    { code: '+975', country: 'Bután' },
    { code: '+238', country: 'Cabo Verde' },
    { code: '+855', country: 'Camboya' },
    { code: '+237', country: 'Camerún' },
    { code: '+1', country: 'Canadá' },
    { code: '+974', country: 'Catar' },
    { code: '+235', country: 'Chad' },
    { code: '+56', country: 'Chile' },
    { code: '+86', country: 'China' },
    { code: '+357', country: 'Chipre' },
    { code: '+57', country: 'Colombia' },
    { code: '+269', country: 'Comoras' },
    { code: '+850', country: 'Corea del Norte' },
    { code: '+82', country: 'Corea del Sur' },
    { code: '+225', country: 'Costa de Marfil' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+385', country: 'Croacia' },
    { code: '+53', country: 'Cuba' },
    { code: '+45', country: 'Dinamarca' },
    { code: '+253', country: 'Yibuti' },
    { code: '+1', country: 'Dominica' },
    { code: '+593', country: 'Ecuador' },
    { code: '+20', country: 'Egipto' },
    { code: '+503', country: 'El Salvador' },
    { code: '+971', country: 'Emiratos Árabes Unidos' },
    { code: '+291', country: 'Eritrea' },
    { code: '+421', country: 'Eslovaquia' },
    { code: '+386', country: 'Eslovenia' },
    { code: '+34', country: 'España' },
    { code: '+1', country: 'Estados Unidos' },
    { code: '+372', country: 'Estonia' },
    { code: '+251', country: 'Etiopía' },
    { code: '+63', country: 'Filipinas' },
    { code: '+358', country: 'Finlandia' },
    { code: '+679', country: 'Fiyi' },
    { code: '+33', country: 'Francia' },
    { code: '+241', country: 'Gabón' },
    { code: '+220', country: 'Gambia' },
    { code: '+995', country: 'Georgia' },
    { code: '+233', country: 'Ghana' },
    { code: '+350', country: 'Gibraltar' },
    { code: '+1', country: 'Granada' },
    { code: '+30', country: 'Grecia' },
    { code: '+299', country: 'Groenlandia' },
    { code: '+590', country: 'Guadalupe' },
    { code: '+1', country: 'Guam' },
    { code: '+502', country: 'Guatemala' },
    { code: '+594', country: 'Guayana Francesa' },
    { code: '+224', country: 'Guinea' },
    { code: '+240', country: 'Guinea Ecuatorial' },
    { code: '+245', country: 'Guinea-Bisáu' },
    { code: '+592', country: 'Guyana' },
    { code: '+509', country: 'Haití' },
    { code: '+504', country: 'Honduras' },
    { code: '+852', country: 'Hong Kong' },
    { code: '+36', country: 'Hungría' },
    { code: '+91', country: 'India' },
    { code: '+62', country: 'Indonesia' },
    { code: '+964', country: 'Irak' },
    { code: '+98', country: 'Irán' },
    { code: '+353', country: 'Irlanda' },
    { code: '+354', country: 'Islandia' },
    { code: '+1', country: 'Islas Caimán' },
    { code: '+682', country: 'Islas Cook' },
    { code: '+298', country: 'Islas Feroe' },
    { code: '+500', country: 'Islas Malvinas' },
    { code: '+1', country: 'Islas Marianas del Norte' },
    { code: '+692', country: 'Islas Marshall' },
    { code: '+677', country: 'Islas Salomón' },
    { code: '+1', country: 'Islas Turcas y Caicos' },
    { code: '+1', country: 'Islas Vírgenes Británicas' },
    { code: '+1', country: 'Islas Vírgenes de los Estados Unidos' },
    { code: '+972', country: 'Israel' },
    { code: '+39', country: 'Italia' },
    { code: '+1', country: 'Jamaica' },
    { code: '+81', country: 'Japón' },
    { code: '+962', country: 'Jordania' },
    { code: '+7', country: 'Kazajistán' },
    { code: '+254', country: 'Kenia' },
    { code: '+996', country: 'Kirguistán' },
    { code: '+686', country: 'Kiribati' },
    { code: '+965', country: 'Kuwait' },
    { code: '+856', country: 'Laos' },
    { code: '+266', country: 'Lesoto' },
    { code: '+371', country: 'Letonia' },
    { code: '+961', country: 'Líbano' },
    { code: '+231', country: 'Liberia' },
    { code: '+218', country: 'Libia' },
    { code: '+423', country: 'Liechtenstein' },
    { code: '+370', country: 'Lituania' },
    { code: '+352', country: 'Luxemburgo' },
    { code: '+853', country: 'Macao' },
    { code: '+389', country: 'Macedonia del Norte' },
    { code: '+261', country: 'Madagascar' },
    { code: '+60', country: 'Malasia' },
    { code: '+265', country: 'Malaui' },
    { code: '+960', country: 'Maldivas' },
    { code: '+223', country: 'Malí' },
    { code: '+356', country: 'Malta' },
    { code: '+212', country: 'Marruecos' },
    { code: '+596', country: 'Martinica' },
    { code: '+230', country: 'Mauricio' },
    { code: '+222', country: 'Mauritania' },
    { code: '+262', country: 'Mayotte' },
    { code: '+52', country: 'México' },
    { code: '+691', country: 'Micronesia' },
    { code: '+373', country: 'Moldavia' },
    { code: '+377', country: 'Mónaco' },
    { code: '+976', country: 'Mongolia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+1', country: 'Montserrat' },
    { code: '+258', country: 'Mozambique' },
    { code: '+264', country: 'Namibia' },
    { code: '+674', country: 'Nauru' },
    { code: '+977', country: 'Nepal' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+227', country: 'Níger' },
    { code: '+234', country: 'Nigeria' },
    { code: '+683', country: 'Niue' },
    { code: '+47', country: 'Noruega' },
    { code: '+687', country: 'Nueva Caledonia' },
    { code: '+64', country: 'Nueva Zelanda' },
    { code: '+968', country: 'Omán' },
    { code: '+31', country: 'Países Bajos' },
    { code: '+92', country: 'Pakistán' },
    { code: '+680', country: 'Palaos' },
    { code: '+970', country: 'Palestina' },
    { code: '+507', country: 'Panamá' },
    { code: '+675', country: 'Papúa Nueva Guinea' },
    { code: '+595', country: 'Paraguay' },
    { code: '+51', country: 'Perú' },
    { code: '+689', country: 'Polinesia Francesa' },
    { code: '+48', country: 'Polonia' },
    { code: '+351', country: 'Portugal' },
    { code: '+1', country: 'Puerto Rico' },
    { code: '+44', country: 'Reino Unido' },
    { code: '+236', country: 'República Centroafricana' },
    { code: '+420', country: 'República Checa' },
    { code: '+242', country: 'República del Congo' },
    { code: '+243', country: 'República Democrática del Congo' },
    { code: '+1', country: 'República Dominicana' },
    { code: '+262', country: 'Reunión' },
    { code: '+250', country: 'Ruanda' },
    { code: '+40', country: 'Rumania' },
    { code: '+7', country: 'Rusia' },
    { code: '+212', country: 'Sáhara Occidental' },
    { code: '+685', country: 'Samoa' },
    { code: '+1', country: 'Samoa Americana' },
    { code: '+590', country: 'San Bartolomé' },
    { code: '+378', country: 'San Marino' },
    { code: '+590', country: 'San Martín' },
    { code: '+508', country: 'San Pedro y Miquelón' },
    { code: '+1', country: 'San Vicente y las Granadinas' },
    { code: '+290', country: 'Santa Elena' },
    { code: '+1', country: 'Santa Lucía' },
    { code: '+239', country: 'Santo Tomé y Príncipe' },
    { code: '+221', country: 'Senegal' },
    { code: '+381', country: 'Serbia' },
    { code: '+248', country: 'Seychelles' },
    { code: '+232', country: 'Sierra Leona' },
    { code: '+65', country: 'Singapur' },
    { code: '+963', country: 'Siria' },
    { code: '+252', country: 'Somalia' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+27', country: 'Sudáfrica' },
    { code: '+249', country: 'Sudán' },
    { code: '+211', country: 'Sudán del Sur' },
    { code: '+46', country: 'Suecia' },
    { code: '+41', country: 'Suiza' },
    { code: '+597', country: 'Surinam' },
    { code: '+268', country: 'Suazilandia' },
    { code: '+66', country: 'Tailandia' },
    { code: '+886', country: 'Taiwán' },
    { code: '+255', country: 'Tanzania' },
    { code: '+992', country: 'Tayikistán' },
    { code: '+670', country: 'Timor Oriental' },
    { code: '+228', country: 'Togo' },
    { code: '+690', country: 'Tokelau' },
    { code: '+676', country: 'Tonga' },
    { code: '+1', country: 'Trinidad y Tobago' },
    { code: '+216', country: 'Túnez' },
    { code: '+993', country: 'Turkmenistán' },
    { code: '+90', country: 'Turquía' },
    { code: '+688', country: 'Tuvalu' },
    { code: '+380', country: 'Ucrania' },
    { code: '+256', country: 'Uganda' },
    { code: '+598', country: 'Uruguay' },
    { code: '+998', country: 'Uzbekistán' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+379', country: 'Vaticano' },
    { code: '+58', country: 'Venezuela' },
    { code: '+84', country: 'Vietnam' },
    { code: '+681', country: 'Wallis y Futuna' },
    { code: '+967', country: 'Yemen' },
    { code: '+253', country: 'Yibuti' },
    { code: '+260', country: 'Zambia' },
    { code: '+263', country: 'Zimbabue' }
];

// Initialize country code input with default value
document.addEventListener('DOMContentLoaded', () => {
    const countryCodeInput = document.getElementById('country_code');
    const suggestionsContainer = document.getElementById('country-suggestions');
    
    // Set default country code (Peru)
    countryCodeInput.value = '+51';

    // Function to filter and display suggestions
    function showSuggestions(searchText) {
        const filteredCodes = countryCodes.filter(item => {
            const searchLower = searchText.toLowerCase();
            return item.code.toLowerCase().includes(searchLower) || 
                   item.country.toLowerCase().includes(searchLower);
        });

        suggestionsContainer.innerHTML = '';
        
        if (filteredCodes.length > 0 && searchText) {
            filteredCodes.forEach(item => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = `${item.code} ${item.country}`;
                div.addEventListener('click', () => {
                    countryCodeInput.value = item.code;
                    suggestionsContainer.innerHTML = '';
                });
                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    }

    // Event listener for input changes
    countryCodeInput.addEventListener('input', (e) => {
        const searchText = e.target.value;
        showSuggestions(searchText);
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!countryCodeInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });

    // Validate country code format
    countryCodeInput.addEventListener('blur', () => {
        const value = countryCodeInput.value.trim();
        if (!value.startsWith('+')) {
            countryCodeInput.value = '+' + value;
        }
    });
});

// Update phone validation to include country code
function getFullPhoneNumber() {
    const countryCode = document.getElementById('country_code').value;
    const phoneNumber = document.querySelector('input[name="phone"]').value;
    return countryCode + phoneNumber;
}
