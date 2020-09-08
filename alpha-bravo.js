(function (){
    (function () {
        "use strict";

        const alphabet = {
            a: "Alpha",
            b: "Bravo",
            c: "Charlie",
            d: "Delta",
            e: "Echo",
            f: "Foxtrot",
            g: "Golf",
            h: "Hotel",
            i: "India",
            j: "Juliett",
            k: "Kilo",
            l: "Lima",
            m: "Mike",
            n: "November",
            o: "Oscar",
            p: "Papa",
            q: "Quebec",
            r: "Romeo",
            s: "Sierra",
            t: "Tango",
            u: "Uniform",
            v: "Victor",
            w: "Whiskey",
            x: "X-ray",
            y: "Yankee",
            z: "Zulu",
            0: "Zero",
            1: "One",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine"
        };

        const return_color_number = function (current_number){
            const max_number = 9;
            let return_number = Math.floor(Math.random() * max_number) + 1;
            return_number = return_number !== current_number ? return_number : (return_number + 1);
            return_number = return_number > max_number ? (return_number - 2) : return_number;
            return return_number;
        };

        const process_input = function (the_input) {
            the_input = the_input.split(" ").filter(word => word.length > 0);
            let export_content = "";
            let last_selected_color;

            if (the_input.length > 0) {
                the_input.forEach(function (word_section) {

                    const this_list = document.createElement("ul");

                    for (const c of word_section) {
                        if (c !== " ") {
                            const phonetic = alphabet[c.toLowerCase()] || c;
                            const new_tr = document.createElement("li");
                            
                            let rand_num = return_color_number(last_selected_color);
                            last_selected_color = rand_num;

                            new_tr.innerHTML = `<small>${c}</small> ${phonetic}`;
                            new_tr.style.backgroundColor = `var(--rand_${rand_num})`;
                            this_list.appendChild(new_tr);
                        }
                    }

                    export_content += `<span>${word_section}</span><ul>${this_list.innerHTML}</ul>`;
                });

                document.querySelector("main section").innerHTML = export_content;
            } else {
                document.querySelector("main section").innerHTML = "<p>Use the above field to translate text</p>";
            }
        };

        document.querySelector("header input").addEventListener("keyup", function (e) {
            process_input(e.target.value);
        });

        window.onload = function () {
            process_input(document.querySelector("header input").value);
        };
    }());
}());