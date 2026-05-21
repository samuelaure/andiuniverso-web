import React from 'react';
import HubLayout from '../components/HubLayout';
import { UserCheck, ScrollText, Star, Baby } from 'lucide-react';

const HumanDesignHubPage: React.FC = () => {
    const links = [
        {
            title: 'Diseño Humano para Maternidad y Crianza',
            description: 'Deja de luchar contra quien es tu hijo. Video curso · €15',
            url: '/human-design/maternidad',
            icon: Baby,
            color: '#a0522d',
        },
        {
            title: 'Sesión de Diseño Humano',
            description: 'Tu manual de usuario único para vivir con menos resistencia y más paz.',
            url: '/human-design/sesion',
            icon: UserCheck,
            color: '#4c2b08',
        },
        {
            title: 'Pergaminos Familiares',
            description: 'El sistema completo para ordenar la convivencia y el entendimiento en el hogar.',
            url: '/pergaminos',
            icon: ScrollText,
            color: '#e1a239',
        },
        {
            title: 'Sesión de Astrología',
            description: 'Tu carta astral como brújula para entender tu energía y procesos.',
            url: '/astrologia/sesion',
            icon: Star,
            color: '#802b48',
        },
    ];

    return (
        <HubLayout
            title="Diseño Humano Andi Universo"
            subtitle="Conecta con tu estrategia natural y la de tus hijos para una crianza sin fricción."
            links={links}
        />
    );
};

export default HumanDesignHubPage;
