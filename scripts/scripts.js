var services = document.querySelectorAll('.service-box');

services.forEach(service => {
    service.addEventListener('click', function(){
        if(service.classList.contains("full-view")){
            showServices()
            toggleServices(service)
            service.childNodes[3].style.display = 'none';
            service.classList.toggle('is-one-third');
        }
        else {
            hideServices();
            toggleServices(service)
            service.classList.toggle('is-one-third');
            service.style.display = 'flex';
            service.childNodes[3].style.display = 'block';
        }
    });
});

function hideServices() {
    services.forEach(service => {
        console.log(service);
        service.classList.toggle("column");
        service.style.display = 'none';
    });
}

function showServices() {
    services.forEach(service => {
        service.classList.toggle("column");
        service.style.display = 'block';
    });
}

function toggleServices(service) {
    service.classList.toggle("column");
    service.classList.toggle("full-view");
}