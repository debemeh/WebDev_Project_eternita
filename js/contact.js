<script>
        // Create a dropdown for services using JavaScript
        const dropdownContainer = document.getElementById('dropdown-container');

        // Create a label for the dropdown
        const label = document.createElement('label');
        label.setAttribute('for', 'services');
        label.textContent = "Select a service:";

        // Create the dropdown (select element)
        const select = document.createElement('select');
        select.id = 'services';
        select.name = 'services';

        // Define options for the dropdown
        const services = ['Makeup', 'Nails', 'Hair', 'Other'];

        // Add options to the dropdown
        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.toLowerCase(); // Use lowercase as value
            option.textContent = service; // Display text
            select.appendChild(option); // Add the option to the dropdown
        });

        // Append the label and dropdown to the container
        dropdownContainer.appendChild(label);
        dropdownContainer.appendChild(select);
    </script>

