class Squares {
    constructor(){
        this.container = document.querySelector( `.tablecontainer` );
        this.rowCounter = 4;
        this.columnCounter = 4;
        this.tbody = document.querySelector( `.tbody` );
        this.btnplusrow = document.querySelector( `.btnplusrow` );
        this.btnpluscol = document.querySelector( `.btnpluscol` );
        this.btnminusrow = document.querySelector( `.btnminusrow` );
        this.btnminuscol = document.querySelector( `.btnminuscol` );
       
        this.tbody.addEventListener( `mouseover`, this.changePosSetData.bind(this) )
        this.btnplusrow.addEventListener('click',  this.plusRow.bind(this) );
        this.btnpluscol.addEventListener( `click`, this.plusCol.bind(this) );
        this.btnminusrow.addEventListener( `click`, this.minusRow.bind(this) );
        this.btnminuscol.addEventListener( `click`, this.minusCol.bind(this) );
        this.container.addEventListener( `mouseenter`, evt => this.mouseEnter(evt) );
        this.container.addEventListener( `mouseleave`, evt => this.mouseLeave(evt) );
    }

    changePosSetData (event) {
        let target = event.target;
        this.btnminusrow.style.top = target.offsetTop +`px`;
        this.btnminuscol.style.left = target.offsetLeft +`px`;
        this.btnminuscol.dataset.cellInd =  target.cellIndex;
        this.btnminusrow.dataset.rowInd = target.parentNode.rowIndex;
    }

    mouseEnter () {
        if( this.rowCounter == 1 ){
            this.btnminusrow.classList.remove( "display" );
        } else {
            this.btnminusrow.classList.add( "display" );
        }
        if( this.columnCounter == 1 ){
            this.btnminuscol.classList.remove( "display" );
        } else {
            this.btnminuscol.classList.add( "display" );
        }
    }

    mouseLeave () {
        this.btnminusrow.classList.remove( "display" );
        this.btnminuscol.classList.remove( "display" );
    }    


    plusRow () { 
        let item = this.tbody.children[0].cloneNode( true );
        this.tbody.appendChild(item);
        this.tr = document.querySelectorAll( `.tablecontainer tr` );
        this.rowCounter++
    }

    plusCol () {
        let td = document.querySelector('td');
        for (let i = 0; i < this.tbody.children.length; i++){
            let item = td.cloneNode();
            this.tbody.children[i].appendChild(item);   
        }
        this.columnCounter++
    }

    minusRow () {
        let item = this.tbody.children[+btnminusrow.getAttribute( 'data-row-ind' )];
        this.tbody.removeChild(item);
        this.btnminusrow.classList.remove( "display" );
        this.rowCounter--
    }

    minusCol () {
        let tr = document.querySelectorAll('.tablecontainer tr')
        for (let i = 0; i < this.tbody.children.length; i++){
            let item = tr[ i ].children[ +btnminuscol.getAttribute( 'data-cell-ind' ) ]
            this.tbody.children[i].removeChild(item) 
        }
        this.btnminuscol.classList.remove( "display" );
    
        this.columnCounter--
    }
}

var squars = new Squares();
