(function() {

    const game = {

        functions: {

            paintCell: function(cell) {

                cell.style.background = 'black';

            },
            
            getValidInput: function(input) {

                console.log("input: ", input, typeof input)

                if (input > 0 && input < 100) {
                    return input;
                }

                return 16;

            },

            promptUser: function() {

                const input = Number(prompt('What size should the grid be (min: 1, max: 100)'));

                if (typeof input != NaN && input > 0 && input < 101) {

                    game.init(input);

                }

            },

            generateCell: function(boardSize) {

                const cell = document.createElement('div');

                cell.classList.add('cell');
                
                const size = 800 / boardSize;
    
                cell.style.width      = size + 'px';
                cell.style.height     = size + 'px';
                cell.style.background = 'lightgray';
    
                return cell;
    
            },
    
            generateRow: function(boardSize) {
    
                const row = document.createElement('div');
    
                row.style.display = 'flex';
    
                for (let i = 1; i <= boardSize; i++) {
    
                    const cell = game.functions.generateCell(boardSize);
    
                    row.appendChild(cell);
    
                }
    
                return row;
    
            },

            clearGrid: function(grid) {

                grid.innerHTML = '';

            },
    
            generateGrid: function(boardSize) {
    
                const grid = document.getElementById('sketch-pad');

                game.functions.clearGrid(grid);
    
                for (let i = 1; i <= boardSize; i++) {
    
                    const row = game.functions.generateRow(boardSize);
    
                    grid.appendChild(row);
    
                }
    
            }

        },

        removeEvents: function() {

            document.getElementById('prompt-user').removeEventListener('click', game.functions.promptUser);

        },

        setEvents: function() {

            game.removeEvents();

            document.getElementById('prompt-user').addEventListener('click', game.functions.promptUser);

            document.querySelectorAll('.cell').forEach((item) => {
                item.addEventListener('mouseover', () => game.functions.paintCell(item));
            });

        },

        init: function(boardSize) {

            game.functions.generateGrid(boardSize);

            game.setEvents();

        }

    };

    game.init(16);

})();