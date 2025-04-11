//your JS code here. If required.
// const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function sorting(str){
    str=str.trim();
    let lower= str.toLowerCase();
    
    if(lower.startsWith('the ')){
        return str.substring(4);
    }else if(lower.startsWith('a ')){
        return str.substring(2);
    }else if(lower.startsWith('an ')){
        return str.substring(3);
    }
    return str;
}
const IgnoreArticle=(arr)=>{
    arr.sort((a,b)=>{
        let k1= sorting(a);
        let k2= sorting(b);
        return k1.localeCompare(k2);
    })
    return arr;
}
let ans=IgnoreArticle(bands);
// console.log(ans);

const ul= document.getElementById('band');
ans.forEach(element => {
    const li= document.createElement('li');
    li.textContent= element;

    ul.appendChild(li);
});

    