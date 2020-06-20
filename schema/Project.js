cube(`Project`, {
  sql: `SELECT * FROM dbo."PROJECT"`,
  title: ` `,
  description: `Projetos`,
  sqlAlias: `Project`,

  joins: {

    CostCenter: {
      relationship: `hasOne`,
      sql: `${CUBE}.FK_CUST_CENTER = ${CostCenter}.ID`
    },

    EmployeeMetrics: {
      relationship: `hasMany`,
      sql: `${CUBE}.ID = ${EmployeeMetrics}.FK_PROJECT`
    }

  },
  
  measures: {

    count: {
      title: `Quantidade de Projetos`,
      description: `Contagem de projetos`,
      type: `count`,
      sql: `${CUBE}.ID`,
      format: `number`
    }

  },
  
  dimensions: {

    id: {
      sql: `${CUBE}.ID`,
      type: `number`,
      primaryKey: true
    },

    name: {
      title: `Projeto`,
      description: `Projetos (Nomes)`,
      sql: `${CUBE}.NAME`,
      type: `string`
    },

    manager: {
      title: `Gerente`,
      description: `Gerentes (Nomes)`,
      sql: `${CUBE}.MANAGER`,
      type: `string`
    },

    creationDate:{
      title: `Data de Criação do Projeto`,
      description: `Data de Criação do Projeto`,
      sql: `${CUBE}.CREATION_DATE`,
      type: `time`
    }

  },

  segments: {

    done: {
      title: `Projetos Concluídos`,
      description: `Segmento de Projetos Concluídos`,
      sql: `${CUBE}.IS_DONE = 1`
    },

    notDone: {
      title: `Projetos não Concluídos`,
      description: `Segmento de Projetos não Concluídos`,
      sql: `${CUBE}.IS_DONE = 0`
    }

  }

});
