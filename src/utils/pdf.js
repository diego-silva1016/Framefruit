import JsPDF from 'jspdf';

export default function GerarPdf(cart) {
  const doc = new JsPDF();
  doc.text('Compra Finalizada!', 75, 10);
  doc.text('Produto', 10, 30);
  doc.text('Quantidade', 60, 30);
  doc.text('Valor unitario', 110, 30);
  doc.text('Total', 180, 30);
  let total = 0;

  cart.forEach((item, index) => {
    total += item.valor * item.quantity;
    doc.text(item.name, 10, (index + 2) * 25);
    doc.text(
      item.quantity.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
      60,
      (index + 2) * 25,
    );
    doc.text(
      item.valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
      110,
      (index + 2) * 25,
    );
    doc.text(
      (item.valor * item.quantity).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
      180,
      (index + 2) * 25,
    );
  });

  doc.text(
    total.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }),
    180,
    (cart.length + 2) * 25,
  );
  doc.output('dataurlnewwindow');
}
