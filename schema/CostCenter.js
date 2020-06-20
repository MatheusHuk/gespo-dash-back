cube(`CostCenter`, {
  sql: `SELECT * FROM dbo."COST_CENTER"`,
  title: ` `,
  description: `Centros de Custo`,
  sqlAlias: `CostCenter`,
  
  joins: {
    
    Project: {
      relationship: `hasMany`,
      sql: `${CUBE}.ID = ${Project}.FK_CUST_CENTER`
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
      title: `Centro de Custo`,
      description: `Centro de Custo (Nomes)`,
      sql: `${CUBE}.NAME`,
      type: `string`
    },

    creationDate:{
      title: `Data de Cadastro de Centro de Custo`,
      description: `Data de Cadastro de Centro de Custo`,
      sql: `${CUBE}.CREATION_DATE`,
      type: `time`
    }

  }

});
