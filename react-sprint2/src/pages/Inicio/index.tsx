import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";
import {Container, Form1, Form2, Form3, Form4} from "./style";
import '../Inicio/style';

export default function Inicio() {
    return (
        <>
            <Header />
            <TextoPrincipal
                titulo="Bem-Vindo ao Conexos"
                descricao="Área exclusiva para funcionários"
            />
        
<Container> 
    <Form1>
    <div className="square2">
        <div className="title">Total</div>
        <div className="value">300</div>
      </div>
      </Form1>

<Form2>
      <div className="square2">
        <div className="title">Em Processo</div>
        <div className="value">3</div>
      </div>
        </Form2>

<Form3>
      <div className="square3">
        <div className="title">Pendentes</div>
        <div className="value">2</div>
      </div>
</Form3>

<Form4>
      <div className="square4">
        <div className="title">Finalizados</div>
        <div className="value">20</div>
      </div>
    </Form4>
    
    </Container>

  );


            
            <Footer />
        </>
    );
}