function createBoard()
{
    const board = document.querySelector(".board");
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let index = 0;
    let dark = false;
    let num = 1;

    for(let i=0; i < 8; i++)
    {
        $(".letters").append($("<li></li>")
        .text(letters[i])
        );

        $(".numbers").append($("<li></li>")
            .text(num++)
            );
    }

    for(let i=1; i<=64; i++)
    {
        const square = document.createElement("div");
        square.classList.add("square");
        if(dark){
            square.classList.add("dark");
        }
        else{
            square.classList.add("light");
        }
        index++;
        dark=!dark;
        
        square.id = (8-Math.ceil(i/8))*8 + (64-i)%8 + (2 * (3.5-((64-i)%8))) + 1;

        board.appendChild(square);

        if(index % 8 == 0)
        {
            dark = !dark;
            index = 0;
        }

    }
}

