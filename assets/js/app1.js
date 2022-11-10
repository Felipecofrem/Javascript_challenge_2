const color = document.querySelector("#color")
color.addEventListener('click', () =>
{
    if (color.style.borderColor == "" )
    {
        color.style.borderColor = "red"
    }
    else
    {
        color.style.borderColor = ""
    }
})


