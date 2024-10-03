function solve() {
    let taskEl = document.getElementById('task');
    let descriptionEl = document.getElementById('description');
    let dateEl = document.getElementById('date');
    let addBtn = document.getElementById('add');
    let divOpenEl = document.querySelectorAll('section')[1].children[1];
    let divInProgressEl = document.getElementById('in-progress');
    let divCompleteEl = document.querySelectorAll('section')[3].children[1];

    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();
        let task = taskEl.value;
        let description = descriptionEl.value;
        let date = dateEl.value;

        if (task == '' || description == '' || date == '') {
            taskEl.value = '';
            descriptionEl.value = '';
            dateEl.value = ''
            return;
        }

        taskEl.value = '';
        descriptionEl.value = '';
        dateEl.value = ''

        let articleEl = document.createElement('article');
        let hEl = document.createElement('h3');
        hEl.textContent = task;
        let p1El = document.createElement('p');
        p1El.textContent = `Description: ${description}`;
        let p2El = document.createElement('p');
        p2El.textContent = `Due Date: ${date}`;
        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'flex');

        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.setAttribute('class', 'green');
        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.setAttribute('class', 'red');

        startBtn.addEventListener('click', onStart);
        delBtn.addEventListener('click', onDelete);

        divEl.append(startBtn, delBtn);
        articleEl.append(hEl, p1El, p2El, divEl);
        divOpenEl.append(articleEl);

        function onStart(e) {
            let progressArticleEl = document.createElement('article');
            let progressHEl = document.createElement('h3');
            progressHEl.textContent = task;
            let progressP1El = document.createElement('p');
            progressP1El.textContent = `Description: ${description}`;
            let progressP2El = document.createElement('p');
            progressP2El.textContent = `Due Date: ${date}`;
            let progressDivEl = document.createElement('div');
            progressDivEl.setAttribute('class', 'flex');

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.setAttribute('class', 'red');
            let finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.setAttribute('class', 'orange');

            deleteBtn.addEventListener('click', onDel);
            finishBtn.addEventListener('click', onFinish);

            progressDivEl.append(deleteBtn, finishBtn);
            progressArticleEl.append(progressHEl, progressP1El, progressP2El, progressDivEl);
            divInProgressEl.append(progressArticleEl);

            articleEl.remove();

            function onDel(e) {
                progressArticleEl.remove();
            }

            function onFinish(e) {
                let completeArticleEl = document.createElement('article');
                let completeHEl = document.createElement('h3');
                completeHEl.textContent = task;
                let completeP1El = document.createElement('p');
                completeP1El.textContent = `Description: ${description}`;
                let completeP2El = document.createElement('p');
                completeP2El.textContent = `Due Date: ${date}`;

                completeArticleEl.append(completeHEl, completeP1El, completeP2El);
                divCompleteEl.append(completeArticleEl);

                articleEl.remove();
                progressArticleEl.remove();
            }
        }

        function onDelete(e) {
            articleEl.remove();
        }
    }
}
