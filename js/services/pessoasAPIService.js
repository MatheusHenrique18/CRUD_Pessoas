var cadastroPessoa = angular.module("cadastroPessoa");

cadastroPessoa.factory("pessoasAPI", function($http){
    var _getPessoas = function(){
        return $http.get("http://localhost:3000/pessoas");
    };
    
    var _savePessoas = function(pessoa){
        return $http.post("http://localhost:3000/pessoas", pessoa);
    };

    var _editPessoas = function(pessoaSelecionada){
        return $http.put("http://localhost:3000/pessoas/"+ pessoaSelecionada.id, pessoaSelecionada);
    };

    var _deletePessoas = function(pessoaSelecionada){
        return $http.delete("http://localhost:3000/pessoas/"+ pessoaSelecionada.id);
    };

    return{
        getPessoas: _getPessoas,
        savePessoas: _savePessoas,
        editPessoas: _editPessoas,
        deletePessoas: _deletePessoas
    };
});