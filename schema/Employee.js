cube(`Employee`, {
  sql: `SELECT * FROM dbo."EMPLOYEE"`,
  title: ` `,
  description: `Funcionários`,
  sqlAlias: `Employee`,
  
  joins: {

    EmployeesProjects: {
      relationship: `belongsTo`,
      sql: `${CUBE}.ID = ${EmployeesProjects}.FK_EMPLOYEE`
    },

    Team: {
      relationship: `belongsTo`,
      sql: `${CUBE}.FK_TEAM = ${Team}.ID`
    },

    Category: {
      relationship: `hasOne`,
      sql: `${CUBE}.FK_CATEGORY = ${Category}.ID`
    },

    EmployeeMetrics: {
      relationship: `hasMany`,
      sql: `${CUBE}.ID = ${EmployeeMetrics}.FK_EMPLOYEE`
    }
    
  },
  
  measures: {

    count: {
      title: `Quantidade de Funcionários`,
      description: `Contagem de funcionários`,
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
      title: `Funcionário`,
      description: `Nomes (Funcionários)`,
      sql: `${CUBE}.NAME`,
      type: `string`
    },

    office: {
      title: `Cargo`,
      description: `Cargos (Funcionários)`,
      sql: `${CUBE}.OFFICE`,
      type: `string`
    },

    creationDate:{
      title: `Data de Contratação de Funcionário`,
      description: `Data de Contratação de Funcionário`,
      sql: `${CUBE}.CREATION_DATE`,
      type: `time`
    }

  }

});
