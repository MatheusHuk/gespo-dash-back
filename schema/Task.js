cube(`Task`, {
  sql: `SELECT * FROM dbo."TASK"`,
  title: ` `,
  description: `Atividades`,
  sqlAlias: `Task`,
  
  joins: {

    Employee: {
      relationship: `belongsTo`,
      sql: `${CUBE}.FK_ASSIGNEE = ${Employee}.ID`
    },

    Project: {
      relationship: `belongsTo`,
      sql: `${CUBE}.FK_PROJECT = ${Project}.ID`
    },

    Category: {
      relationship: `hasOne`,
      sql: `${CUBE}.FK_CATEGORY = ${Category}.ID`
    }

  },
  
  measures: {

    count: {
      title: `Quantidade de Atividades`,
      description: `Quantidade de Atividades`,
      type: `count`,
      sql: `${CUBE}.ID`,
    }

  },
  
  dimensions: {

    id: {
      sql: `${CUBE}.ID`,
      type: `number`,
      primaryKey: true
    },

    creationDate:{
      title: `Data de Criação da Atividade`,
      description: `Data de Criação da Atividade`,
      sql: `${CUBE}.CREATION_DATE`,
      type: `time`
    }

  }

});
