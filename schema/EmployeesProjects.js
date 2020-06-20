cube(`EmployeesProjects`, {
  sql: `SELECT * FROM dbo."EMPLOYEES_PROJECTS"`,
  title: ` `,
  description: `Relacionamento Funcionário X Projetos`,
  sqlAlias: `EmployeesProjects`,
  
  joins: {

    Project: {
      relationship: `belongsTo`,
      sql: `${CUBE}.FK_PROJECT = ${Project}.ID`
    },
  
    Employee: {
      relationship: `belongsTo`,
      sql: `${CUBE}.FK_EMPLOYEE = ${Employee}.ID`
    }

  },
  
  measures: {
    

  },
  
  dimensions: {
    
    id: {
      sql: `${CUBE}.ID`,
      type: `number`,
      primaryKey: true
    }

  }

});
