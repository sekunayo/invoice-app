import { Form, Formik } from 'formik';
import { styles } from './common/styles/app_styles';
import Input from './components/Input';
import InvoiceCard from './components/InvoiceCard';
import Sidebar from './components/Sidebar';
import EmptyInvoice from './views/EmptyInvoice';
import EditInvoice from './views/FormLayout';
import Invoices from './pages/Invoices';
import Overlay from './components/Overlay';
import FormLayout from './views/FormLayout';
import ViewInvoice from './pages/ViewInvoice';

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      {/* <Invoices /> */}
      <ViewInvoice />
    </div>
  );
}

export default App;
