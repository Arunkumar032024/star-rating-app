$(document).ready(function(){
    const user = {
        name:'',
        email:'',
        mobile:'',
        password:'',
        confirmPassword:''
    }

    // code for star rating
    let s1 = $('#s1');
    let s2 = $('#s2');
    let s3 = $('#s3');
    let s4 = $('#s4');
    let s5 = $('#s5');

    let rate = 0;

    function starColor(color, ...stars){
        stars.map(star => {
            star.css('color', `${color}`);
        })
    }

    s1.on({
        'click': function (){
            rate = 1;   
            console.log(rate)
            starColor('rd', s1)
        },
        'mouseover': function(){
            starColor('#F4CE14', s1)
        },
        'mouseleave': function(){
            rate != 1 ? starColor('#45474B', s1) : null ;
            
        },
        
    })
    s2.on({
        'click': function (){
            rate = 2;   
            console.log(rate)
        },
        'mouseover': function(){
            starColor('#F4CE14', s1, s2);
        },
        'mouseleave': function(){
            rate != 2 ?  starColor('#45474B', s1, s2) : null ;
        },
    })
    s3.on({
        'click': function (){
            rate = 3;   
            console.log(rate)
        },
        'mouseover': function(){
            starColor('#F4CE14', s1, s2, s3);
        },
        'mouseleave': function(){
            rate != 3 ? starColor('#45474B', s1, s2, s3) : null ;
        },
    })
    s4.on({
        'click': function (){
            rate = 4;   
            console.log(rate)
        },
        'mouseover': function(){
            starColor('#F4CE14', s1, s2, s3, s4);
        },
        'mouseleave': function(){
            rate != 4 ? starColor('#45474B', s1, s2, s3, s4) : null ;
        },
    })
    s5.on({
        'click': function (){
            rate = 5;   
            console.log(rate)
        },
        'mouseover': function(){
            starColor('#F4CE14', s1, s2, s3, s4, s5);
        },
        'mouseleave': function(){
            rate != 5 ? starColor('#45474B', s1, s2, s3, s4, s5) : null ;
        },
    })

    const starRateBtn = $(".star-rating-container #submit");
    
    starRateBtn.click(function(){
        if(rate !== 0){
            $(this).hide();
            $("#s1, #s2, #s3, #s4, #s5").css('pointer-events', 'none');
            $(".feedback").removeClass('hide');
        }else{
            $('.star-error').removeClass('hide')
            $('.star-error').text('Please select a rating')
            setTimeout(()=>{
                $('.star-error').addClass('hide')
            }, 1000)
        }
    })
    // End code for star rating
})