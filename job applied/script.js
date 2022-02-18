console.log("this is my script.js");
// Project 5: Creating a CV Screener in javascript

// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Priyanka Patil',
        age: 24,
        city: 'Belgaum',
        language: 'Rust',
        framework: 'Rocket',
        image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        name: 'Jwella Fernandez',
        age: 23,
        city: 'Goa',
        language: 'Go-lang',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
        name: 'Anusha Adapa',
        age: 25,
        city: 'Belgaum',
        language: 'C++',
        framework: 'Asio C++ library',
        image: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    {
        name: 'Sanyukta Patil',
        age: 24,
        city: 'Belgaum',
        language: 'Java',
        framework: 'Hibernate',
        image: 'https://randomuser.me/api/portraits/women/66.jpg'
    }, 
    {
        name: 'Shristi Patil',
        age: 23,
        city: 'Kolhapur',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/60.jpg'
    }, 
    {
        name: 'Soumya Sangote',
        age: 24,
        city: 'Sankeshwar',
        language: 'JavaScript',
        framework: 'React', 
        image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
        name: 'Sanjana Mahalank',
        age: 24,
        city: 'Sankeshwar',
        language: 'Python', 
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/38.jpg'
    }
    
];

// CV Iterator
function cvIterator(profiles) {  
    let nextIndex = 0;
    return {
        next: function () {  
            return nextIndex < profiles.length ? 
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}

// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


const candidates = cvIterator(data);

nextCV();
function nextCV() {  
    const currentCadidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCadidate != undefined) {
    image.innerHTML = `<img src="${currentCadidate.image}">`;

    profile.innerHTML = 
    `<ul class="list-group">
        <li class="list-group-item list-group-item" style="font-style: italic">Name: ${currentCadidate.name}</li>
        <li class="list-group-item list-group-item-secondary" style="font-style: italic">Age: ${currentCadidate.age}</li>
        <li class="list-group-item list-group-item-primary" style="font-style: italic">Lives in: ${currentCadidate.city}</li>
        <li class="list-group-item list-group-item-dark" style="font-style: italic">Programming Language: ${currentCadidate.language}</li>
        <li class="list-group-item list-group-item-primary" style="font-style: italic">Framework: ${currentCadidate.framework} framework</li>
    </ul>`;
    }
    else {
        let done = document.getElementById('done');

        done.classList.add('show');
        $('#done').show();

        setTimeout(() => {
            window.location.reload();
        }, 1170);
    }
}