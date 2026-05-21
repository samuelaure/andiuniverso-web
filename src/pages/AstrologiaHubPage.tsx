import React from 'react';
import HubLayout from '../components/HubLayout';
import { Star, ScrollText, UserCheck, Baby } from 'lucide-react';

const AstrologiaHubPage: React.FC = () => {
    const links = [
        {
            title: 'Astrología para Maternidad y Crianza',
            description: 'Lee la carta de tu hijo y deja de adivinar. Video curso · €15',
            url: '/astrologia/maternidad',
            icon: Baby,
            color: '#a0522d',
        },
        {
            title: 'Sesión de Astrología',
            description: 'Tu carta astral como brújula para entender tu energía y procesos.',
            url: '/astrologia/sesion',
            icon: Star,
            color: '#802b48',
        },
        {
            title: 'Pergaminos Familiares',
            description: 'El sistema completo para ordenar la convivencia y el entendimiento en el hogar.',
            url: '/pergaminos',
            icon: ScrollText,
            color: '#e1a239',
        },
        {
            title: 'Sesión de Diseño Humano',
            description: 'Tu manual de usuario único para vivir con menos resistencia y más paz.',
            url: '/human-design/sesion',
            icon: UserCheck,
            color: '#4c2b08',
        },
    ];

    return (
        <HubLayout
            title="Astrología Andi Universo"
            subtitle="Recursos y sesiones para madres que buscan claridad en sus procesos y en los de su familia."
            links={links}
        />
    );
};

export default AstrologiaHubPage;
