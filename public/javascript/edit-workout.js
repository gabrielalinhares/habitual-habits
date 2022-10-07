async function editWorkoutFormHandler(event) {
    event.preventDefault();

    //update names if changed in handlebars
    const exercise_type = document.querySelector('input[name="exercise_type"]').value.trim();
    const exercise_duration = document.querySelector('textarea[name="exercise-duration"]').value.trim();
    const calories_burned = document.querySelector('input[name="calories-burned"]').value.trim();
    const calories_consumed = document.querySelector('textarea[name="calories-consumed"]').value.trim();
    const current_weight = document.querySelector('textarea[name="current-weight"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/workouts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            exercise_type,
            exercise_duration,
            calories_burned,
            calories_consumed,
            current_weight
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}
//update classes if changed in handlebars
document.querySelector('.edit-workout-form').addEventListener('submit', editWorkoutFormHandler);