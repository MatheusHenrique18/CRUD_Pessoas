var cadastroPessoa = angular.module("cadastroPessoa", []);

cadastroPessoa.controller("pessoaController", function($scope, $http, pessoasAPI){
    $scope.app = "Registro de Pessoas";
    $scope.messageSuccess = "";
    $scope.pessoas = [];
    $scope.pessoa;
    
    //apenas para indicar id do novo registro a ser criado pelo usuário
    $scope.sequenceID = 0;

    function listarPessoas(){
        // $http({
        //     method: 'GET',
        //     url: 'http://localhost:3000/pessoas'
        //  }).then(function (response){
        //     $scope.pessoas = response.data;
        //     $scope.sequenceID = $scope.pessoas.length + 1; 
        //  },function (error){
        //      error = "Sistema não conseguiu carregar registros do *db.json*. Erro ao carregar response.data de pessoas.";
        //     console.log(error);
        //  });

        pessoasAPI.getPessoas().then(function(response){
            $scope.pessoas = response.data;
            $scope.sequenceID = $scope.pessoas.length + 1;
        },function(error){
            error = "Sistema não conseguiu carregar registros do *db.json*. Erro ao carregar response.data de pessoas.";
            console.log(error);
        });
    }
    

    $scope.cadastrarPessoa = function(pessoa){
        // $http({
        //     method: 'POST',
        //     url: 'http://localhost:3000/pessoas',
        //     data: pessoa
        //  }).then(function (response){
        //     $scope.messageSuccess = "Registro cadastrado com sucesso!";
        //     listarPessoas();
        //  },function (error){
        //      error = "Sistema não conseguiu cadastrar pessoa corretamente.";
        //     console.log(error);
        //  });

        pessoasAPI.savePessoas(pessoa).then(function(response){
            $scope.messageSuccess = "Registro cadastrado com sucesso!";
            listarPessoas();
            delete $scope.pessoa;
        },function(error){
            error = "Sistema não conseguiu cadastrar pessoa corretamente.";
            console.log(error);
        });
    };

    $scope.selecionarPessoa = function(pessoa){
        $scope.pessoaSelecionada = pessoa;
    };

    $scope.alterarPessoa = function(pessoaSelecionada){
        // $http({
        //     method: 'PUT',
        //     url: 'http://localhost:3000/pessoas/'+pessoaSelecionada.id,
        //     data: pessoaSelecionada
        //  }).then(function (response){
        //     $scope.messageSuccess = "Registro alterado com sucesso!";
        //     listarPessoas();
        //  },function (error){
        //      error = "Sistema não conseguiu identificar o id para alterar a pessoa correta.";
        //     console.log(error);
        //  });

        pessoasAPI.editPessoas(pessoaSelecionada).then(function(response){
            $scope.messageSuccess = "Registro alterado com sucesso!";
            listarPessoas();
        },function(error){
            error = "Sistema não conseguiu identificar o id para alterar a pessoa correta.";
            console.log(error);
        });

    };

    $scope.excluirPessoa = function(pessoaSelecionada){
        // $http({
        //     method: 'DELETE',
        //     url: 'http://localhost:3000/pessoas/'+$scope.pessoaSelecionada.id
        //  }).then(function (response){
        //     $scope.messageSuccess = "Registro excluído com sucesso!";
        //     listarPessoas();
        //  },function (error){
        //      error = "Sistema não conseguiu identificar o id para excluir a pessoa correta.";
        //     console.log(error);
        //  });
        
        pessoasAPI.deletePessoas(pessoaSelecionada).then(function(response){
            $scope.messageSuccess = "Registro excluído com sucesso!";
            listarPessoas();
        },function(error){
            error = "Sistema não conseguiu identificar o id para excluir a pessoa correta.";
            console.log(error);
        });

    };

    $scope.clearMessages = function(){
        $scope.messageSuccess = "";
    };

    listarPessoas();
});