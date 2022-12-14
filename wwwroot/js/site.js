// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    var x = 'X';
    var o = 'O';
    var empty = '';

    $(document).click(function (e) {
        let elem = $(e.target);
        if (elem.html() === empty && elem.hasClass('field')) {
            elem.html(x);
            setTimeout(doStep, 300);
        } else if (elem.html() === empty && elem.hasClass('field')) {
            elem.html(o);
            setTimeout(doStep, 300);
        } else if (elem.html() !== empty && elem.hasClass('field')) {
            alert('Ячейка занята!');
        }
    });

    $(".btn-game").click(function () {
        location.reload();
    })

    function doStep() {
        a1 = $('#a1').html();
        a2 = $('#a2').html();
        a3 = $('#a3').html();

        b1 = $('#b1').html();
        b2 = $('#b2').html();
        b3 = $('#b3').html();

        c1 = $('#c1').html();
        c2 = $('#c2').html();
        c3 = $('#c3').html();


        $.get('Home/GetInfo/', {
            a1: a1,
            a2: a2,
            a3: a3,
            b1: b1,
            b2: b2,
            b3: b3,
            c1: c1,
            c2: c2,
            c3: c3
        }, function (data) {
            $('.text-danger').html(data);
            console.log(data);

            $("#a1").html(data[0]);
            $("#a2").html(data[1]);
            $("#a3").html(data[2]);
            $("#b1").html(data[3]);
            $("#b2").html(data[4]);
            $("#b3").html(data[5]);
            $("#c1").html(data[6]);
            $("#c2").html(data[7]);
            $("#c3").html(data[8]);

            if (data[9] !== undefined) {
                let wonText;
                if (data[9] === "wonX") {
                    wonText = "Вы победили!!!";
                } else if (data[9] === "wonO") {
                    wonText = "Вы проиграли!";
                } else {
                    wonText = "Ничья!";
                }
                setTimeout(function () {
                    $(".winner").html("<h2>" + wonText + "</h2> ")
                }, 400);
                $('#a1').removeClass("field");
                $('#a2').removeClass("field");
                $('#a3').removeClass("field");

                $('#b1').removeClass("field");
                $('#b2').removeClass("field");
                $('#b3').removeClass("field");

                $('#c1').removeClass("field");
                $('#c2').removeClass("field");
                $('#c3').removeClass("field");
            }
        });
    }
});