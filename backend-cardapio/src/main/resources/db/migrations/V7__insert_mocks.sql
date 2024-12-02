INSERT INTO stores (name, description, address, phone_number, img_url, password, created_at) 
VALUES 
  ('Café Bliss', 'Um café de bairro amigável oferecendo café, doces e muito mais.', 'Blvd Café, 101, Cidade do Café, BT 34567', '555-0104', 'https://exemplo.com/imagens/cafebliss.jpg', 'senha101', UTC_TIMESTAMP()),
  ('Padaria Artesanal', 'Pães e doces frescos todos os dias.', 'Rua das Padarias, 505, Cidade Doce, SC 78901', '555-0108', 'https://exemplo.com/imagens/padariaartesanal.jpg', 'senha505', UTC_TIMESTAMP());

INSERT INTO dishes (name, description, price, img_url, store_id) 
VALUES 
  ('Café Expresso', 'Café expresso forte e encorpado, perfeito para começar o dia.', 7.50, 'https://exemplo.com/imagens/cafeexpresso.jpg', (SELECT id FROM stores WHERE name = 'Café Bliss')),
  ('Cappuccino', 'Café cremoso com leite vaporizado e uma pitada de chocolate.', 12.00, 'https://exemplo.com/imagens/cappuccino.jpg', (SELECT id FROM stores WHERE name = 'Café Bliss')),
  ('Bolo de Chocolate', 'Delicioso bolo de chocolate com cobertura cremosa e morangos frescos.', 15.00, 'https://exemplo.com/imagens/bolodechocolate.jpg', (SELECT id FROM stores WHERE name = 'Café Bliss')),
  ('Croissant de Amêndoas', 'Croissant fresco recheado com creme de amêndoas e polvilhado com açúcar.', 10.50, 'https://exemplo.com/imagens/croissantamendoas.jpg', (SELECT id FROM stores WHERE name = 'Café Bliss')),
  ('Torta de Maçã', 'Torta de maçã caseira com massa folhada e canela.', 12.50, 'https://exemplo.com/imagens/tortadearoa.jpg', (SELECT id FROM stores WHERE name = 'Café Bliss'));

INSERT INTO dishes (name, description, price, img_url, store_id) 
VALUES 
  ('Pão de Queijo', 'Pão de queijo fresquinho, feito com queijo mineiro e polvilho.', 5.00, 'https://exemplo.com/imagens/paodequeijo.jpg', (SELECT id FROM stores WHERE name = 'Padaria Artesanal')),
  ('Baguete Artesanal', 'Baguete crocante por fora, macia por dentro, ideal para acompanhar o almoço.', 8.00, 'https://exemplo.com/imagens/bagueteartesanal.jpg', (SELECT id FROM stores WHERE name = 'Padaria Artesanal')),
  ('Croissant de Chocolate', 'Croissant com recheio de chocolate belga, perfeito para o café da manhã.', 10.00, 'https://exemplo.com/imagens/croissantchocolate.jpg', (SELECT id FROM stores WHERE name = 'Padaria Artesanal')),
  ('Torta de Limão', 'Torta de limão com base de biscoito e creme suave de limão.', 13.00, 'https://exemplo.com/imagens/tortadelimao.jpg', (SELECT id FROM stores WHERE name = 'Padaria Artesanal')),
  ('Pão Integral', 'Pão integral fresquinho, ideal para quem busca uma opção mais saudável.', 7.00, 'https://exemplo.com/imagens/paointegral.jpg', (SELECT id FROM stores WHERE name = 'Padaria Artesanal'));

INSERT INTO clients (name, phone_number, email, password, img_url) 
VALUES 
  ('João Silva', '555-0123', 'joao.silva@email.com', 'senhaJoao123', 'https://exemplo.com/imagens/joaosilva.jpg'),
  ('Maria Oliveira', '555-0456', 'maria.oliveira@email.com', 'senhaMaria456', 'https://exemplo.com/imagens/mariaoliveira.jpg'),
  ('Carlos Souza', '555-0789', 'carlos.souza@email.com', 'senhaCarlos789', 'https://exemplo.com/imagens/carlossouza.jpg'),
  ('Fernanda Costa', '555-1011', 'fernanda.costa@email.com', 'senhaFernanda1011', 'https://exemplo.com/imagens/fernandacosta.jpg'),
  ('Roberto Almeida', '555-1213', 'roberto.almeida@email.com', 'senhaRoberto1213', 'https://exemplo.com/imagens/robertoalmeida.jpg'),
  ('Patrícia Lima', '555-1415', 'patricia.lima@email.com', 'senhaPatricia1415', 'https://exemplo.com/imagens/patricialima.jpg'),
  ('Ricardo Pereira', '555-1617', 'ricardo.pereira@email.com', 'senhaRicardo1617', 'https://exemplo.com/imagens/ricardopereira.jpg'),
  ('Juliana Mendes', '555-1819', 'juliana.mendes@email.com', 'senhaJuliana1819', 'https://exemplo.com/imagens/julianamendes.jpg'),
  ('Rafael Santos', '555-2021', 'rafael.santos@email.com', 'senhaRafael2021', 'https://exemplo.com/imagens/rafaelsantos.jpg'),
  ('Lucas Ferreira', '555-2223', 'lucas.ferreira@email.com', 'senhaLucas2223', 'https://exemplo.com/imagens/lucasferreira.jpg');

-- Addresses for clients
INSERT INTO addresses (address, complement, city, state, cep, client_id)
VALUES 
  ('Rua das Flores, 123', 'Apto 301', 'São Paulo', 'SP', '01010-001', (SELECT id FROM clients WHERE name = 'João Silva')),
  ('Avenida Paulista, 500', 'Sala 10', 'São Paulo', 'SP', '01310-000', (SELECT id FROM clients WHERE name = 'Maria Oliveira')),
  ('Rua do Sol, 45', 'Casa', 'Rio de Janeiro', 'RJ', '20010-000', (SELECT id FROM clients WHERE name = 'Carlos Souza')),
  ('Rua da Paz, 101', 'Bloco B, Apto 202', 'Belo Horizonte', 'MG', '30120-000', (SELECT id FROM clients WHERE name = 'Fernanda Costa')),
  ('Rua das Palmeiras, 999', 'Andar 3', 'Recife', 'PE', '50010-000', (SELECT id FROM clients WHERE name = 'Roberto Almeida')),
  ('Rua do Carmo, 56', 'Perto da praça', 'Salvador', 'BA', '40010-050', (SELECT id FROM clients WHERE name = 'Patrícia Lima')),
  ('Avenida Rio Branco, 230', 'Loja 15', 'Rio de Janeiro', 'RJ', '20090-000', (SELECT id FROM clients WHERE name = 'Ricardo Pereira')),
  ('Rua das Laranjeiras, 89', 'Casa 5', 'Curitiba', 'PR', '80030-080', (SELECT id FROM clients WHERE name = 'Juliana Mendes')),
  ('Avenida 9 de Julho, 300', 'Andar 4', 'São Paulo', 'SP', '01450-000', (SELECT id FROM clients WHERE name = 'Rafael Santos')),
  ('Rua São João, 70', 'Próximo ao mercado', 'Porto Alegre', 'RS', '90010-200', (SELECT id FROM clients WHERE name = 'Lucas Ferreira'));

-- Addresses for stores
INSERT INTO addresses (address, complement, city, state, cep, client_id)
VALUES 
  ('Blvd Café, 101', 'Loja 1', 'Cidade do Café', 'BT', '34567-000', (SELECT id FROM stores WHERE name = 'Café Bliss')),
  ('Rua das Padarias, 505', 'Loja 3', 'Cidade Doce', 'SC', '78901-100', (SELECT id FROM stores WHERE name = 'Padaria Artesanal'));

-- Orders for Café Bliss
INSERT INTO orders (client_id, store_id, order_items, payment_confirmed, delivery_confirmed, order_time)
VALUES
  ((SELECT id FROM clients WHERE name = 'João Silva'), (SELECT id FROM stores WHERE name = 'Café Bliss'), 2, TRUE, FALSE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Maria Oliveira'), (SELECT id FROM stores WHERE name = 'Café Bliss'), 3, FALSE, FALSE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Carlos Souza'), (SELECT id FROM stores WHERE name = 'Café Bliss'), 1, TRUE, TRUE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Ricardo Pereira'), (SELECT id FROM stores WHERE name = 'Café Bliss'), 4, TRUE, TRUE, UTC_TIMESTAMP());

-- Orders for Padaria Artesanal
INSERT INTO orders (client_id, store_id, order_items, payment_confirmed, delivery_confirmed, order_time)
VALUES
  ((SELECT id FROM clients WHERE name = 'Fernanda Costa'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 5, TRUE, TRUE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Roberto Almeida'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 2, FALSE, FALSE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Patrícia Lima'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 3, TRUE, FALSE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Juliana Mendes'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 4, TRUE, TRUE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Lucas Ferreira'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 1, TRUE, FALSE, UTC_TIMESTAMP());

-- Orders for Café Bliss
INSERT INTO orders (client_id, store_id, order_items, payment_confirmed, delivery_confirmed, order_time)
VALUES
  ((SELECT id FROM clients WHERE name = 'João Silva'), (SELECT id FROM stores WHERE name = 'Café Bliss'), 2, TRUE, FALSE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Maria Oliveira'), (SELECT id FROM stores WHERE name = 'Café Bliss'), 3, FALSE, FALSE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Carlos Souza'), (SELECT id FROM stores WHERE name = 'Café Bliss'), 1, TRUE, TRUE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Ricardo Pereira'), (SELECT id FROM stores WHERE name = 'Café Bliss'), 4, TRUE, TRUE, UTC_TIMESTAMP());

-- Orders for Padaria Artesanal
INSERT INTO orders (client_id, store_id, order_items, payment_confirmed, delivery_confirmed, order_time)
VALUES
  ((SELECT id FROM clients WHERE name = 'Fernanda Costa'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 5, TRUE, TRUE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Roberto Almeida'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 2, FALSE, FALSE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Patrícia Lima'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 3, TRUE, FALSE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Juliana Mendes'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 4, TRUE, TRUE, UTC_TIMESTAMP()),
  ((SELECT id FROM clients WHERE name = 'Lucas Ferreira'), (SELECT id FROM stores WHERE name = 'Padaria Artesanal'), 1, TRUE, FALSE, UTC_TIMESTAMP());

