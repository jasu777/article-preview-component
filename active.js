const share=document.getElementById("ring")
const social=document.getElementById("story")
const body=document.getElementById("mainbox")
share.addEventListener("focusin",action1)
share.addEventListener("focusout",action2)

function action1()
{
    social.style.opacity="100";
}
function action2()
{
    social.style.opacity="0";
}