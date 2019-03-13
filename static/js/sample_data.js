// It is just an idea how you can structure your data during your page is running.
// You can use it for testing purposes by simply copy/paste/run in the Console tab in your browser

let keyInLocalStorage = 'proman-data';

let sampleData = {
    "statuses": [
        {
            "id": 0,
            "name": "New"
        },
        {
            "id": 1,
            "name": "In progress"
        },
        {
            "id": 2,
            "name": "Testing"
        },
        {
            "id": 3,
            "name": "Done"
        }
    ],
    "boards": [
        {
            "id": 0,
            "title": "Test Board 1",
            "is_active": true
        },
        {
            "id": 1,
            "title": "Test Board 2",
            "is_active": true
        }
    ],
    "cards": [
        {
            "id": 0,
            "title": "task1",
            "board_id": 0,
            "status_id": 0,
            "order": 2
        },
        {
            "id": 1,
            "title": "task2",
            "board_id": 0,
            "status_id": 1,
            "order": 1
        },
        {
            "id": 2,
            "title": "task3",
            "board_id": 0,
            "status_id": 3,
            "order": 0
        },
        {
            "id": 3,
            "title": "task4",
            "board_id": 2,
            "status_id": 0,
            "order": 2
        },
        {
            "id": 4,
            "title": "task5",
            "board_id": 1,
            "status_id": 1,
            "order": 1
        },
        {
            "id": 5,
            "title": "task6",
            "board_id": 1,
            "status_id": 2,
            "order": 0
        }
    ]
};

localStorage.setItem(keyInLocalStorage, JSON.stringify(sampleData));

