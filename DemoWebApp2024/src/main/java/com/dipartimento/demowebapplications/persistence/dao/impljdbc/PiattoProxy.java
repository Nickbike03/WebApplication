package com.dipartimento.demowebapplications.persistence.dao.impljdbc;
import com.dipartimento.demowebapplications.model.Ristorante;
import com.dipartimento.demowebapplications.persistence.dao.RistoranteDao;
import com.dipartimento.demowebapplications.persistence.dao.impljdbc.RistoranteDaoJDBC;
import com.dipartimento.demowebapplications.model.Piatto;
import com.dipartimento.demowebapplications.persistence.DBManager;
import com.dipartimento.demowebapplications.persistence.dao.PiattoDao;


import java.util.List;

public class PiattoProxy extends Piatto {
    protected List<Ristorante> ristoranti;

    public List<Ristorante> getRistoranti(String nomePiatto) {
        List<Ristorante> tuttuRistoranti;
        if(ristoranti == null){
            tuttuRistoranti = DBManager.getInstance().getRistoranteDao().findAll();
            for(Ristorante ristorante : tuttuRistoranti){
                List<Piatto> piatti = ristorante.getPiatti();
                for(Piatto p : piatti){
                    if (p.getNome() == nomePiatto) ristoranti.add(ristorante);
                }

            }

        }

        return ristoranti;
    }
}
