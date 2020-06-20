cube(`EmployeeMetrics`, {
  sql: `SELECT * FROM dbo."VW_DASH_METRICS"`,
  title: ` `,
  description: `Employee Metrics`,
  sqlAlias: `EmployeeMetrics`,
  
  joins: {
    
  },
  
  measures: {

    countWork: {
      title: `Quantidade de Apontamentos`,
      description: `Quantidade de Apontamentos`,
      sql: `${CUBE}.ID`,
      type: `count`,
      filters: [
        { 
          sql: `${CUBE}.ID_ACTION = 1`
        }
      ]
    },

    totalHoursWork: {
      title: `Apontamento em Horas`,
      description: `Soma de Apontamento em Horas`,
      sql: `${CUBE}.AMOUNT_HOURS`,
      type: `sum`,
      filters: [
        { 
          sql: `${CUBE}.ID_ACTION = 1`
        }
      ]
    },

    totalAmountWork: {
      title: `Apontamento em Dinheiro`,
      description: `Soma de Apontamento em Dinheiro`,
      sql: `${CUBE}.AMOUNT_HOURS * ${Employee}.HOUR_VALUE`,
      type: `sum`,
      format: `currency`,
      filters: [
        { 
          sql: `${CUBE}.ID_ACTION = 1`
        }
      ]
    },

    countProvisioning: {
      title: `Quantidade de Provisionamentos`,
      description: `Quantidade de Provisionamentos`,
      sql: `${CUBE}.ID`,
      type: `count`,
      filters: [
        { 
          sql: `${CUBE}.ID_ACTION = 2`
        }
      ]
    },

    totalHoursProvisioning: {
      title: `Provisionamento em Horas`,
      description: `Soma de Provisionamento em Horas`,
      sql: `${CUBE}.AMOUNT_HOURS`,
      type: `sum`,
      filters: [
        { 
          sql: `${CUBE}.ID_ACTION = 2`
        }
      ]
    },

    totalAmountProvisioning: {
      title: `Provisionamento em Dinheiro`,
      description: `Soma de Provisionamento em Dinheiro`,
      sql: `${CUBE}.AMOUNT_HOURS * ${Employee}.HOUR_VALUE`,
      type: `sum`,
      format: `currency`,
      filters: [
        { 
          sql: `${CUBE}.ID_ACTION = 2`
        }
      ]
    }


    
  },
  
  dimensions: {

    id: {
      sql: `${CUBE}.ID`,
      type: `number`,
      primaryKey: true
    },

    actionDate:{
      title: `Data de Faturamento`,
      description: `Data de Faturamento`,
      sql: `${CUBE}.CREATION_DATE`,
      type: `time`
    }

  }

});
