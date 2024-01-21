function perc() {
    let total_marks=document.getElementById("tm1").value
    let obtain_marks=document.getElementById("om1").value
    let res= obtain_marks/total_marks*100
    document.getElementById("change").innerHTML=`you have got ${res} %`
}