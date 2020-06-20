cube(`Team`, {
  sql: `SELECT * FROM dbo."TEAM"`,
  title: ` `,
  description: `Times`,
  sqlAlias: `Team`,
  
  joins: {

    Employee: {
      relationship: `hasMany`,
      sql: `${CUBE}.ID = ${Employee}.FK_TEAM`
    }

  },
  
  measures: {

  },
  
  dimensions: {

    id: {
      sql: `${CUBE}.ID`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      title: `Time`,
      description: `Times (Nomes)`,
      sql: `${CUBE}.NAME`,
      type: `string`
    },

    creationDate:{
      title: `Data de Criação do Time`,
      description: `Data de Criação do Time`,
      sql: `${CUBE}.CREATION_DATE`,
      type: `time`
    }
    
  }

});
