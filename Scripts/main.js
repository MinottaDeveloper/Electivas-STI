window.addEventListener("load", function start(){

    const btnHome = this.document.querySelector('.btn-home');

    const btnConQuien = document.querySelector('.btn-conquien');
    const pBienvenida = this.document.querySelector('.p-bienvenida');
    const pQuienmatricular = this.document.querySelector('.p-quienmatricular');

    const btnConquienesM = this.document.querySelector('.btn-conquienesM');
    const pQuienesMateria = this.document.querySelector('.p-quienes-materia');

    const btnMateria = this.document.querySelector('.btn-materia');
    const pQueMateria = this.document.querySelector('.p-que-materia');

    const btnRecomendarM = this.document.querySelector('.btn-recomendarM');
    const pRecomendarMateria = this.document.querySelector('.p-recomendar-materia');

    const btnMateriaAmig = this.document.querySelector('.btn-materiaAmig');
    const pMateriasParaAmigos = this.document.querySelector('.p-materias-para-amigos');

    const btnGrupoAmig = this.document.querySelector('.btn-grupoAmig');
    const pGrupoAmigosMaterias = this.document.querySelector('.p-grupo-amigos-materias');


    function volverHome(){
        pBienvenida.style.display = 'flex';
        pQuienmatricular.style.display = 'none';
        pQuienesMateria.style.display = 'none';
        pQueMateria.style.display = 'none';
        pRecomendarMateria.style.display = 'none';
        pMateriasParaAmigos.style.display = 'none';
        pGrupoAmigosMaterias.style.display = 'none';
    }

    /*
    function ocultarBtnHome(){
        if(pBienvenida.style.display == 'flex'){
            btnHome.style.display== 'none'
        }else{
            btnHome.style.display== 'block'
        }
    }
    */


    ocultarBtnHome;

    function conQuienMatricular(){
      pBienvenida.style.display = 'none';
      pQuienmatricular.style.display = 'flex';
    }

    function quienesYmateria(){
        pBienvenida.style.display = 'none';
        pQuienesMateria.style.display = 'flex';
    }

    function queMateriaMatricular(){
        pBienvenida.style.display = 'none';
        pQueMateria.style.display = 'flex';
    }

    function recomendarMateria(){
        pBienvenida.style.display = 'none';
        pRecomendarMateria.style.display = 'flex';
    }

    function materiasParaAmigos(){
        pBienvenida.style.display = 'none';
        pMateriasParaAmigos.style.display = 'flex';
    }

    function grupoAmigosMaterias(){
        pBienvenida.style.display = 'none';
        pGrupoAmigosMaterias.style.display = 'flex';
    }

    btnHome.addEventListener('click', volverHome);

    btnConQuien.addEventListener('click', conQuienMatricular);
    btnConquienesM.addEventListener('click', quienesYmateria);
    btnMateria.addEventListener('click', queMateriaMatricular);
    btnRecomendarM.addEventListener('click', recomendarMateria);
    btnMateriaAmig.addEventListener('click', materiasParaAmigos);
    btnGrupoAmig.addEventListener('click', grupoAmigosMaterias);

});

