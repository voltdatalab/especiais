# Concepção 

Este projeto foi feito a partir de um levantamento da agência de jornalismo **Volt Data Lab**.

A ideia nos foi indicada por um potencial cliente o qual, após ver o resultado parcial da pesquisa, não se interessou em prosseguir e publicar o material. 

O Volt, no entanto, empenhado em fazer reportagens e levantamentos de potencial interesse público e que considera ter relevância, não quis abandonar o projeto e decidiu prosseguir para publicação por conta própria. 

## Metodologia

A pesquisa analisou cerca de 700 reportagens, notas e publicações da [Agência Brasil](http://agenciabrasil.ebc.com.br) de 12 de maio a 22 de agosto nas quais o presidente interino Michel Temer foi citado. 

![100 dias Temer - Gráfico por Volt Data Lab](https://c1.staticflickr.com/9/8469/28580610924_9c30ecca93_b.jpg)

Foram realizadas buscas [^A busca exata considerada foi: `”Michel Temer” site:http://agenciabrasil.ebc.com.br`] no [Google](http://google.com) com o nome de “Michel Temer”, levando em conta apenas material publicado no site da agência estatal de notícias. 

Matérias sem citar Temer diretamente texto das matérias foram desconsideradas, mesmo que envolvesse aliados, ministros ou políticas ligadas a ele. Às vezes o nome do presidente interino pode constar nos metadados da página, mas não necessariamente no conteúdo.

Além disso, outras matérias como que as falam genericamente de governo ou medidas provisórias, por exemplo, sem citar Temer, também foram desconsideradas.

Os critérios de escolha para selecionar a Agência Brasil como fonte foram: 
1. fonte aberta;
2. isenção[^Embora a própria agência seja motivo de polêmica envolvendo a indicação do jornalista [Ricardo Melo](http://agenciabrasil.ebc.com.br/politica/noticia/2016-05/ricardo-melo-ingressa-com-acao-no-stf-para-garantir-mandato-de-presidente) para presidência da EBC, é possível dizer que o tom das matérias é isento.];
3. cobertura geral de assuntos de governo;
4. não repetição exaustiva de de temas[^A repetição exaustiva de temas pode ser afetar o levantamentos de casos únicos. Por exemplo, falar todo dia sobre o afastamento de Romero Jucá do Ministério do Planejamento não significa que cada nova matéria trata de casos diferentes, e sim explora o mesmo caso com diferentes ângulos - de toda forma, é o mesmo caso]. 

Embora alguns casos não tenham sido reportados pela Agência Brasil, é razoável considerar que a agência estatal faça uma cobertura bastante geral do governo, sendo possível, assim, chegar às conclusões da pesquisa.

O conteúdo levantado foi classificado em cinco categorias principais e nove subcategorias, escolhidas após primeira análise do material, buscando sempre a neutralidade na escolha.

São as categorias: 
1. **Polêmicas** = controvérsias envolvendo Michel Temer, integrantes do governo ou políticas federais;
2. **Políticas** = questões envolvendo políticas públicas a respeito de diversos temas, como econômicos, sociais, ambientais etc. promovidos pelo governo federal e seus membros;
3. **Repercussões** = reflexões, comentários gerais, opiniões, manifestações sobre o governo interino ou sobre o presidente interino por interlocutores de fora do Executivo, seja a neutro/indefinido, a favor ou contra ele;
4. **Nomeações** = indicações ou exonerações feitas por Michel Temer para cargos federais e articulações para posições no Congresso;
5. **Perspectivas no governo** = situação atual, previsões, interesses declarados, comentários gerais, promessas,  declarações gerais, posicionamentos, itens de itinerário do presidente e do governo e planos não concretos por membros do governo.

São as subcategorias: 
1. **Base Aliada** = item relativo a questões políticas do governo no Congresso;
2. **Cortes & Revisões** = relativo a revisões (para cima ou para baixo) de programas existentes e cortes orçamentários, por exemplo;
3. **Ministros & Cargos** = relativo a questões sobre ministérios e ministros e indicados a cargos no governo federal e estatais como sujeitos ativos, como por exemplo a questões relacionadas a eles mesmos, como polêmicas, nomeações, expectativas sobre o cargo e interesses, ou a discussões sobre políticas gerais etc;
4. **Novas Políticas** = relativo a novos programas, ações e medidas do novo governo;
5. **Políticas Existentes** = relativo à manutenção de programas, planos e políticas existentes, sem revisões ou cortes;
6. **Protestos** = relativo a manifestações contra o governo por grupo de pessoas;
7. **Impeachment** = relativo a repercussões relacionadas ao impeachment de Dilma Rousseff;
8. **Temer** = tópico relativo diretamente a Michel Temer como sujeito ativo em assuntos gerais;
9. **Outros** = todo o resto que não cabe nas subcategorias mencionadas;

## Gráficos

O gráfico principal foi feito em [D3.js](http://d3js.org) a partir da sensacional [adaptação](http://www.visualcinnamon.com/portfolio/words-lord-of-the-rings) do chamado “diagrama de cordas” feita por [Nadieh Bremer](https://twitter.com/NadiehBremer), do [Visual Cinnamon](http://www.visualcinnamon.com/).
