let periods=[],totalDaysWorked=0;document.getElementById("addPeriodBtn").addEventListener("click",function(){const a=document.getElementById("periodName").value,b=parseInt(document.getElementById("workedDays").value);if(""===a.trim())return void alert("Por favor, insira o nome do per\xEDodo.");if(isNaN(b)||0>=b)return void alert("Por favor, insira um n\xFAmero v\xE1lido de dias trabalhados.");periods.push({periodName:a,workedDays:b}),totalDaysWorked+=b,updatePeriodList();const c=calcularAnos(totalDaysWorked);document.getElementById("totalDays").innerText=`Soma total de dias trabalhados: ${totalDaysWorked} (${c.anos} ano(s) e ${c.diasRestantes} dia(s))`,document.getElementById("periodName").value="",document.getElementById("workedDays").value=""});function calcularAnos(a){const b=Math.floor(a/365);return{anos:b,diasRestantes:a%365}}function updatePeriodList(){const a=document.getElementById("periodList");a.innerHTML="",periods.forEach(b=>{const c=document.createElement("li");c.innerText=`Período: ${b.periodName} - ${b.workedDays} dias trabalhados`,a.appendChild(c)})}document.getElementById("resetBtn").addEventListener("click",function(){periods=[],totalDaysWorked=0,document.getElementById("periodList").innerHTML="",document.getElementById("totalDays").innerText=""});