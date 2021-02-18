import { Tooltip } from '@material-ui/core';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, RadialBar, RadialBarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './grafico.css';

export default function GraficoMaterial(props){
    return(
        <ResponsiveContainer height={300} className="boxGraph">
            <BarChart width={730} height={250} data={props.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={props.legenda} fill={props.cor} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export function GraficoUsuarios(props){
    return(
        <ResponsiveContainer height={300} className="boxGraph">
            <RadialBarChart 
                width={800}
                height={250} 
                innerRadius="10%" 
                outerRadius="100%" 
                data={props.data} 
                startAngle={180} 
                endAngle={0}
                >
                <RadialBar  minAngle={15} label={{ fill: '#fff', position: 'insideStart' }} background clockWise={true} dataKey={props.legenda} />
                <Legend  iconSize={10} width={120} height={140} layout='vertical' verticalAlign='bottom' align="right" />
                <Tooltip />
            </RadialBarChart>
        </ResponsiveContainer>
    );
}
export function GraficoDesempenho(props){
    return(
        <ResponsiveContainer height={300} className="boxGraph">
            <LineChart width={730} height={250} data={props.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={props.titulo} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={props.legenda} stroke={props.cor} />
            </LineChart>
        </ResponsiveContainer>
    )
}
