document.getElementById('issuesInputForm').addEventListener('submit', saveIssue)


function fetchIssues(){
    let issues = JSON.parse(localStorage.getItem('issues'));
    let issuesList = document.getElementById('issuesList');


    issuesList.innerHTML = '';

    for(let i = 0; i < issues.length; i++){
        let id = issues[i].id
        let subject = issues[i].subject
        let description = issues[i].description
        let severity = issues[i].severity
        let assignedTo = issues[i].assignedTo
        let status = issues[i].status
        let statusColor = status == "Closed" ? "label-success" : "label-info"

        //issuesList.innerHTML +=
    }
}


function saveIssue(e){

}