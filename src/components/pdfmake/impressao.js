import React from 'react';

export class Impressao extends React.Component {
        constructor(conf,header,body) {
        super()
        this.conf = conf;
        this.header = header;
        // this.dadosParaImpressao = dadosParaImpressao;
        this.body = body;
        // this.footer = footer;
        // console.log(titulo+header+body+footer)
    }

    
    async PreparaDocumento() {
        const corpoDocumento = this.CriaCorpoDocumento();
        const documento = this.GerarDocumento(corpoDocumento);
        return documento;
    }
    
    CriaCorpoDocumento() {
        // const header = [
        //     { text: 'Nome Produto', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        //     { text: 'Qtd. Estoque', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        //     { text: 'Qtd. Vendido', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        // ];
        // const body = this.dadosParaImpressao.map((d) => {
        //     return [
        //         { text: d.nome, fontSize: 8 },
        //         { text: d.qtdEstoque, fontSize: 8 },
        //         { text: d.qtdVendido, fontSize: 8 },
        //     ];
        // });
        
        let header = this.header;
        let body = this.body;

      const lineHeader = [
        {
          text:
            '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
          alignment: 'center',
          fontSize: 5,
          colSpan: 3,
        },
        {},
        {},
      ];
  
      let content = [header, lineHeader];
      content = [...content, ...body];
      return content;
    }
  
    GerarDocumento(corpoDocumento) {
        let titulo = this.conf.titulo;
        let footer = this.conf.footer;

      const documento = {
        pageSize: 'A4',
        pageMargins: [14, 53, 14, 48],
        header: function () {
          return {
              margin: [14, 12, 14, 0],
              layout: 'noBorders',
              table: {
                widths: ['*'],
                body: [                             
                  [
                    { text: [titulo] , style: 'reportName' }
                  ]              
                ],
              },
            };
        },
        watermark: { text: 'EcoRenda',  color: 'green', opacity: 0.3, bold: true, italics: false },
      content: [
        {
              layout: 'noBorders',
              table: {              
                headerRows: 1,
                widths: [ '*', 55, 55 ],
  
                body: corpoDocumento
              }
            },
      ],
      footer(currentPage, pageCount) {
            return {
              layout: 'noBorders',
              margin: [14, 0, 14, 22],
              table: {
                widths: ['auto'],
                body: [
                  [
                    {
                      text:
                        '_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
                      alignment: 'center',
                      fontSize: 5,
                    },
                  ],
                  [
                    [
                      {
                        text: `Página ${currentPage.toString()} de ${pageCount}`,
                        fontSize: 7,
                        alignment: 'right',
                        /* horizontal, vertical */
                        margin: [3, 0],
                      },
                      {
                        text: [footer],
                        fontSize: 7,
                        alignment: 'center',
                      },
                    ],
                  ],
                ],
              },
            };
          },
      styles: {
        reportName: {
          fontSize: 9,
          bold: true,
          alignment: 'center',
          margin: [0, 4, 0, 0],
        }
      },
  
    };
      return documento;
    }
  }