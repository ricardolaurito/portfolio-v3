// Country codes data
const countryCodes = [
    { code: '+93', country: 'Afganistán', flag: '🇦🇫' },
    { code: '+355', country: 'Albania', flag: '🇦🇱' },
    { code: '+49', country: 'Alemania', flag: '🇩🇪' },
    { code: '+376', country: 'Andorra', flag: '🇦🇩' },
    { code: '+244', country: 'Angola', flag: '🇦🇴' },
    { code: '+1', country: 'Anguila', flag: '🇦🇮' },
    { code: '+1', country: 'Antigua y Barbuda', flag: '🇦🇬' },
    { code: '+966', country: 'Arabia Saudita', flag: '🇸🇦' },
    { code: '+213', country: 'Argelia', flag: '🇩🇿' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+374', country: 'Armenia', flag: '🇦🇲' },
    { code: '+297', country: 'Aruba', flag: '🇦🇼' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+994', country: 'Azerbaiyán', flag: '🇦🇿' },
    { code: '+1', country: 'Bahamas', flag: '🇧🇸' },
    { code: '+973', country: 'Bahréin', flag: '🇧🇭' },
    { code: '+880', country: 'Bangladés', flag: '🇧🇩' },
    { code: '+1', country: 'Barbados', flag: '🇧🇧' },
    { code: '+32', country: 'Bélgica', flag: '🇧🇪' },
    { code: '+501', country: 'Belice', flag: '🇧🇿' },
    { code: '+229', country: 'Benín', flag: '🇧🇯' },
    { code: '+1', country: 'Bermudas', flag: '🇧🇲' },
    { code: '+375', country: 'Bielorrusia', flag: '🇧🇾' },
    { code: '+95', country: 'Birmania', flag: '🇲🇲' },
    { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
    { code: '+387', country: 'Bosnia y Herzegovina', flag: '🇧🇦' },
    { code: '+267', country: 'Botsuana', flag: '🇧🇼' },
    { code: '+55', country: 'Brasil', flag: '🇧🇷' },
    { code: '+673', country: 'Brunéi', flag: '🇧🇳' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+257', country: 'Burundi', flag: '🇧🇮' },
    { code: '+975', country: 'Bután', flag: '🇧🇹' },
    { code: '+238', country: 'Cabo Verde', flag: '🇨🇻' },
    { code: '+855', country: 'Camboya', flag: '🇰🇭' },
    { code: '+237', country: 'Camerún', flag: '🇨🇲' },
    { code: '+1', country: 'Canadá', flag: '🇨🇦' },
    { code: '+974', country: 'Catar', flag: '🇶🇦' },
    { code: '+235', country: 'Chad', flag: '🇹🇩' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+357', country: 'Chipre', flag: '🇨🇾' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+269', country: 'Comoras', flag: '🇰🇲' },
    { code: '+850', country: 'Corea del Norte', flag: '🇰🇵' },
    { code: '+82', country: 'Corea del Sur', flag: '🇰🇷' },
    { code: '+225', country: 'Costa de Marfil', flag: '🇨🇮' },
    { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
    { code: '+385', country: 'Croacia', flag: '🇭🇷' },
    { code: '+53', country: 'Cuba', flag: '🇨🇺' },
    { code: '+45', country: 'Dinamarca', flag: '🇩🇰' },
    { code: '+253', country: 'Yibuti', flag: '🇩🇯' },
    { code: '+1', country: 'Dominica', flag: '🇩🇲' },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
    { code: '+20', country: 'Egipto', flag: '🇪🇬' },
    { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
    { code: '+971', country: 'Emiratos Árabes Unidos', flag: '🇦🇪' },
    { code: '+291', country: 'Eritrea', flag: '🇪🇷' },
    { code: '+421', country: 'Eslovaquia', flag: '🇸🇰' },
    { code: '+386', country: 'Eslovenia', flag: '🇸🇮' },
    { code: '+34', country: 'España', flag: '🇪🇸' },
    { code: '+1', country: 'Estados Unidos', flag: '🇺🇸' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+251', country: 'Etiopía', flag: '🇪🇹' },
    { code: '+63', country: 'Filipinas', flag: '🇵🇭' },
    { code: '+358', country: 'Finlandia', flag: '🇫🇮' },
    { code: '+679', country: 'Fiyi', flag: '🇫🇯' },
    { code: '+33', country: 'Francia', flag: '🇫🇷' },
    { code: '+241', country: 'Gabón', flag: '🇬🇦' },
    { code: '+220', country: 'Gambia', flag: '🇬🇲' },
    { code: '+995', country: 'Georgia', flag: '🇬🇪' },
    { code: '+233', country: 'Ghana', flag: '🇬🇭' },
    { code: '+350', country: 'Gibraltar', flag: '🇬🇮' },
    { code: '+1', country: 'Granada', flag: '🇬🇩' },
    { code: '+30', country: 'Grecia', flag: '🇬🇷' },
    { code: '+299', country: 'Groenlandia', flag: '🇬🇱' },
    { code: '+590', country: 'Guadalupe', flag: '🇬🇵' },
    { code: '+1', country: 'Guam', flag: '🇬🇺' },
    { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
    { code: '+594', country: 'Guayana Francesa', flag: '🇬🇫' },
    { code: '+224', country: 'Guinea', flag: '🇬🇳' },
    { code: '+240', country: 'Guinea Ecuatorial', flag: '🇬🇶' },
    { code: '+245', country: 'Guinea-Bisáu', flag: '🇬🇼' },
    { code: '+592', country: 'Guyana', flag: '🇬🇾' },
    { code: '+509', country: 'Haití', flag: '🇭🇹' },
    { code: '+504', country: 'Honduras', flag: '🇭🇳' },
    { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
    { code: '+36', country: 'Hungría', flag: '🇭🇺' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+964', country: 'Irak', flag: '🇮🇶' },
    { code: '+98', country: 'Irán', flag: '🇮🇷' },
    { code: '+353', country: 'Irlanda', flag: '🇮🇪' },
    { code: '+354', country: 'Islandia', flag: '🇮🇸' },
    { code: '+1', country: 'Islas Caimán', flag: '🇰🇾' },
    { code: '+682', country: 'Islas Cook', flag: '🇨🇰' },
    { code: '+298', country: 'Islas Feroe', flag: '🇫🇴' },
    { code: '+500', country: 'Islas Malvinas', flag: '🇫🇰' },
    { code: '+1', country: 'Islas Marianas del Norte', flag: '🇲🇵' },
    { code: '+692', country: 'Islas Marshall', flag: '🇲🇭' },
    { code: '+677', country: 'Islas Salomón', flag: '🇸🇧' },
    { code: '+1', country: 'Islas Turcas y Caicos', flag: '🇹🇨' },
    { code: '+1', country: 'Islas Vírgenes Británicas', flag: '🇻🇬' },
    { code: '+1', country: 'Islas Vírgenes de los Estados Unidos', flag: '🇻🇮' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+39', country: 'Italia', flag: '🇮🇹' },
    { code: '+1', country: 'Jamaica', flag: '🇯🇲' },
    { code: '+81', country: 'Japón', flag: '🇯🇵' },
    { code: '+962', country: 'Jordania', flag: '🇯🇴' },
    { code: '+7', country: 'Kazajistán', flag: '🇰🇿' },
    { code: '+254', country: 'Kenia', flag: '🇰🇪' },
    { code: '+996', country: 'Kirguistán', flag: '🇰🇬' },
    { code: '+686', country: 'Kiribati', flag: '🇰🇮' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+856', country: 'Laos', flag: '🇱🇦' },
    { code: '+266', country: 'Lesoto', flag: '🇱🇸' },
    { code: '+371', country: 'Letonia', flag: '🇱🇻' },
    { code: '+961', country: 'Líbano', flag: '🇱🇧' },
    { code: '+231', country: 'Liberia', flag: '🇱🇷' },
    { code: '+218', country: 'Libia', flag: '🇱🇾' },
    { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+370', country: 'Lituania', flag: '🇱🇹' },
    { code: '+352', country: 'Luxemburgo', flag: '🇱🇺' },
    { code: '+853', country: 'Macao', flag: '🇲🇴' },
    { code: '+389', country: 'Macedonia del Norte', flag: '🇲🇰' },
    { code: '+261', country: 'Madagascar', flag: '🇲🇬' },
    { code: '+60', country: 'Malasia', flag: '🇲🇾' },
    { code: '+265', country: 'Malaui', flag: '🇲🇼' },
    { code: '+960', country: 'Maldivas', flag: '🇲🇻' },
    { code: '+223', country: 'Malí', flag: '🇲🇱' },
    { code: '+356', country: 'Malta', flag: '🇲🇹' },
    { code: '+212', country: 'Marruecos', flag: '🇲🇦' },
    { code: '+596', country: 'Martinica', flag: '🇲🇶' },
    { code: '+230', country: 'Mauricio', flag: '🇲🇺' },
    { code: '+222', country: 'Mauritania', flag: '🇲🇷' },
    { code: '+262', country: 'Mayotte', flag: '🇾🇹' },
    { code: '+52', country: 'México', flag: '🇲🇽' },
    { code: '+691', country: 'Micronesia', flag: '🇫🇲' },
    { code: '+373', country: 'Moldavia', flag: '🇲🇩' },
    { code: '+377', country: 'Mónaco', flag: '🇲🇨' },
    { code: '+976', country: 'Mongolia', flag: '🇲🇳' },
    { code: '+382', country: 'Montenegro', flag: '🇲🇪' },
    { code: '+1', country: 'Montserrat', flag: '🇲🇸' },
    { code: '+258', country: 'Mozambique', flag: '🇲🇿' },
    { code: '+264', country: 'Namibia', flag: '🇳🇦' },
    { code: '+674', country: 'Nauru', flag: '🇳🇷' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
    { code: '+227', country: 'Níger', flag: '🇳🇪' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+683', country: 'Niue', flag: '🇳🇺' },
    { code: '+47', country: 'Noruega', flag: '🇳🇴' },
    { code: '+687', country: 'Nueva Caledonia', flag: '🇳🇨' },
    { code: '+64', country: 'Nueva Zelanda', flag: '🇳🇿' },
    { code: '+968', country: 'Omán', flag: '🇴🇲' },
    { code: '+31', country: 'Países Bajos', flag: '🇳🇱' },
    { code: '+92', country: 'Pakistán', flag: '🇵🇰' },
    { code: '+680', country: 'Palaos', flag: '🇵🇼' },
    { code: '+970', country: 'Palestina', flag: '🇵🇸' },
    { code: '+507', country: 'Panamá', flag: '🇵🇦' },
    { code: '+675', country: 'Papúa Nueva Guinea', flag: '🇵🇬' },
    { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
    { code: '+51', country: 'Perú', flag: '🇵🇪' },
    { code: '+689', country: 'Polinesia Francesa', flag: '🇵🇫' },
    { code: '+48', country: 'Polonia', flag: '🇵🇱' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+1', country: 'Puerto Rico', flag: '🇵🇷' },
    { code: '+44', country: 'Reino Unido', flag: '🇬🇧' },
    { code: '+236', country: 'República Centroafricana', flag: '🇨🇫' },
    { code: '+420', country: 'República Checa', flag: '🇨🇿' },
    { code: '+242', country: 'República del Congo', flag: '🇨🇬' },
    { code: '+243', country: 'República Democrática del Congo', flag: '🇨🇩' },
    { code: '+1', country: 'República Dominicana', flag: '🇩🇴' },
    { code: '+262', country: 'Reunión', flag: '🇷🇪' },
    { code: '+250', country: 'Ruanda', flag: '🇷🇼' },
    { code: '+40', country: 'Rumania', flag: '🇷🇴' },
    { code: '+7', country: 'Rusia', flag: '🇷🇺' },
    { code: '+212', country: 'Sáhara Occidental', flag: '🇪🇭' },
    { code: '+685', country: 'Samoa', flag: '🇼🇸' },
    { code: '+1', country: 'Samoa Americana', flag: '🇦🇸' },
    { code: '+590', country: 'San Bartolomé', flag: '🇧🇱' },
    { code: '+378', country: 'San Marino', flag: '🇸🇲' },
    { code: '+590', country: 'San Martín', flag: '🇸🇽' },
    { code: '+508', country: 'San Pedro y Miquelón', flag: '🇵🇲' },
    { code: '+1', country: 'San Vicente y las Granadinas', flag: '🇻🇨' },
    { code: '+290', country: 'Santa Elena', flag: '🇸🇭' },
    { code: '+1', country: 'Santa Lucía', flag: '🇱🇨' },
    { code: '+239', country: 'Santo Tomé y Príncipe', flag: '🇸🇹' },
    { code: '+221', country: 'Senegal', flag: '🇸🇳' },
    { code: '+381', country: 'Serbia', flag: '🇷🇸' },
    { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
    { code: '+232', country: 'Sierra Leona', flag: '🇸🇱' },
    { code: '+65', country: 'Singapur', flag: '🇸🇬' },
    { code: '+963', country: 'Siria', flag: '🇸🇾' },
    { code: '+252', country: 'Somalia', flag: '🇸🇴' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+27', country: 'Sudáfrica', flag: '🇿🇦' },
    { code: '+249', country: 'Sudán', flag: '🇸🇩' },
    { code: '+211', country: 'Sudán del Sur', flag: '🇸🇸' },
    { code: '+46', country: 'Suecia', flag: '🇸🇪' },
    { code: '+41', country: 'Suiza', flag: '🇨🇭' },
    { code: '+597', country: 'Surinam', flag: '🇸🇷' },
    { code: '+268', country: 'Suazilandia', flag: '🇸🇿' },
    { code: '+66', country: 'Tailandia', flag: '🇹🇭' },
    { code: '+886', country: 'Taiwán', flag: '🇹🇼' },
    { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
    { code: '+992', country: 'Tayikistán', flag: '🇹🇯' },
    { code: '+670', country: 'Timor Oriental', flag: '🇹🇱' },
    { code: '+228', country: 'Togo', flag: '🇹🇬' },
    { code: '+690', country: 'Tokelau', flag: '🇹🇰' },
    { code: '+676', country: 'Tonga', flag: '🇹🇴' },
    { code: '+1', country: 'Trinidad y Tobago', flag: '🇹🇹' },
    { code: '+216', country: 'Túnez', flag: '🇹🇳' },
    { code: '+993', country: 'Turkmenistán', flag: '🇹🇲' },
    { code: '+90', country: 'Turquía', flag: '🇹🇷' },
    { code: '+688', country: 'Tuvalu', flag: '🇹🇻' },
    { code: '+380', country: 'Ucrania', flag: '🇺🇦' },
    { code: '+256', country: 'Uganda', flag: '🇺🇬' },
    { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
    { code: '+998', country: 'Uzbekistán', flag: '🇺🇿' },
    { code: '+678', country: 'Vanuatu', flag: '🇻🇺' },
    { code: '+379', country: 'Vaticano', flag: '🇻🇦' },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+681', country: 'Wallis y Futuna', flag: '🇼🇫' },
    { code: '+967', country: 'Yemen', flag: '🇾🇪' },
    { code: '+260', country: 'Zambia', flag: '🇿🇲' },
    { code: '+263', country: 'Zimbabue', flag: '🇿🇼' }
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
                div.textContent = `${item.flag}  ${item.country}  ${item.code}`;
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
