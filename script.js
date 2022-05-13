$("button").click(function(){
    let farts=$(".fartsinput").val();
    console.log(farts);
    let year=$(".yearinput").val();
     let name=$(".nameinput").val();
    let totalfarts=farts * 365 * (2024 - year);
    $(".fortune-display").append(name + " by year 2024,you will have farted "+totalfarts+" times");
});