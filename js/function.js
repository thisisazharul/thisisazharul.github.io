
//take value from input
function getValueFromInput(id)
{
    const mainId = document.getElementById(id);
    const inputValueString = mainId.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

//set value function
function setValueInText(id, returnValue)
{
    const mainId = document.getElementById(id)
    mainId.innerText = returnValue;
}
//set value in formula
function setValueFormula(input1, input2, setValue1, setValue2)
{
    const formulaA = document.getElementById(input1);
    const formulaB = document.getElementById(input2);
    if (isNaN(setValue1) || isNaN(setValue2))
    {
        alert("Enter a valid number and fillup all the respective fields")
        return;
    }
    formulaA.innerText = setValue1;
    formulaB.innerText = setValue2;
}

//new element adder 
let value = 0;
function newElementAdd(area, areaName)
{
    const areaContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.classList.add('ml-5', 'text-sm', 'text-gray-900', 'font-semibold',
    );

    let fixedArea = area.toFixed(2);
    value = value + 1;

    tr.innerHTML = `
    <td class="text-sm pl-5 ">${value}. </td>
    <td class="text-left text-sm w-8">${areaName}</td>
    <td class="text-sm"> = ${fixedArea} cm<sup>2</sup></td>
    <td><button class="hover:animate-pulse mx-1 my-2 py-1 px-2 text-xs rounded-full  bg-blue-100 text-gray-900 hover:bg-blue-600 hover:text-white transition-all">Convert to M<sup>2</sup></button></td>
    
    `
    if (isNaN(area))
    {
        return;
    }
    areaContainer.appendChild(tr);
}

//random color generate

randomColor = function (e)
{
    // Generate a random hue between 0 and 359
    const hue = Math.floor(Math.random() * 360);

    // Generate a random saturation between 30% and 70%
    const saturation = Math.floor(Math.random() * 11) + 40;

    // Generate a random lightness between 20% and 80%
    const lightness = Math.floor(Math.random() * 31) + 70;

    // Convert HSL to RGB
    const h = hue / 360;
    const s = saturation / 100;
    const l = lightness / 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h * 6) % 2 - 1));
    const m = l - c / 2;
    let r, g, b;
    if (h < 1 / 6)
    {
        r = c;
        g = x;
        b = 0;
    } else if (h < 2 / 6)
    {
        r = x;
        g = c;
        b = 0;
    } else if (h < 3 / 6)
    {
        r = 0;
        g = c;
        b = x;
    } else if (h < 4 / 6)
    {
        r = 0;
        g = x;
        b = c;
    } else if (h < 5 / 6)
    {
        r = x;
        g = 0;
        b = c;
    } else
    {
        r = c;
        g = 0;
        b = x;
    }
    const red = Math.round((r + m) * 255);
    const green = Math.round((g + m) * 255);
    const blue = Math.round((b + m) * 255);

    // Convert RGB to hexadecimal string
    const randomColor = `#${(1 << 24 | red << 16 | green << 8 | blue).toString(16).slice(1)}`;

    // Set the background color of the div to the random color
    e.style.background = randomColor;

    //e.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}