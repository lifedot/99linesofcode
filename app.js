let friends = ["Goofy", "Mickey", "Daisy", "Minnie", "Simba" ];

for ( let i = 0; i < friends.length; i++ ) {
    console.log(friends[i]);

    for ( let counter = 99; counter >= 1; counter = counter - 1 ) {
        if (counter == 1) {
            lines = "line";
        } else {
            lines = "lines"

        }
        console.log(counter + " " + lines+ " of code in the file,"+  (" " +counter + " " + lines+ " of code."));
        
        console.log(friends[i] + " strikes one out, clears it all out, "+  (" " +counter-1 + " " + lines+ " of code in the file.")); 
        if (counter < 99) {
            console.log(" ");
            if (counter ==1) {
                console.log("No more lines of code in the file.");
        }
        }
            
        }
    }

