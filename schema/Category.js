cube(`Category`, {
  sql: `SELECT * FROM dbo."CATEGORY"`,
  title: ` `,
  description: `Categorias`,
  sqlAlias: `Category`,

  joins: {

    Employee: {
      relationship: `belongsTo`,
      sql: `${CUBE}.ID = ${Employee}.FK_CATEGORY`
    },

    Task: {
      relationship: `belongsTo`,
      sql: `${CUBE}.ID = ${Task}.FK_CATEGORY`
    }

  },
  
  measures: {

    count: {
      title: `Quantidade de Categorias`,
      description: `Quantidade de Categorias`,
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

    dsCategory: {
      title: `Categoria`,
      description: `Categorias (Nomes)`,
      sql: `${CUBE}.DS_CATEGORY`,
      type: `string`
    }
   
  }

  
});
