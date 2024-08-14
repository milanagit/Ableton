window.addEventListener('load', loadJS);

function loadJS() {
    // Variables
    const mainLogoImage = document.getElementsByClassName('mk-main-nav__logo__image')[0];

    const dropDownMenu = document.getElementsByClassName('mk-dropdown_menu')[0];
    const dropDownMenuBtn = document.getElementById('mk-dropdown_menu-btn');

    // Event listeners
    dropDownMenuBtn.addEventListener('click', toggleMenu);

    /* FUNCTIONS */
    // toggle dropdown menu
    function toggleMenu() {
        // console.log(mainLogoImage);
        mainLogoImage.classList.toggle('mk-is_active');
        dropDownMenu.classList.toggle('mk-is_active');
        dropDownMenuBtn.classList.toggle('mk-is_active');
    }
    
}